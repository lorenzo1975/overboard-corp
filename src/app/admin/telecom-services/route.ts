import { createHash, timingSafeEqual } from "node:crypto";
import { getStore } from "@netlify/blobs";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const privateHeaders = {
  "Cache-Control": "private, no-store, max-age=0",
  "Netlify-CDN-Cache-Control": "no-store",
  "Referrer-Policy": "no-referrer",
  "X-Content-Type-Options": "nosniff",
  "X-Robots-Tag": "noindex, nofollow",
};

// The hashes allow only the reviewed attachment's inline filter and stylesheet.
const registerPolicy = [
  "default-src 'none'",
  "script-src 'sha256-GQUvMx7dP9+Zg4UUN7A618LWhD5egHyXDnzAt4GAnpU='",
  "style-src 'sha256-+nxybtsxIJuC3Da8hyxH9XR/vHA0hiOVZbgc1dWIVQg='",
  "base-uri 'none'",
  "frame-ancestors 'none'",
  "form-action 'none'",
  "sandbox allow-scripts",
].join("; ");

export async function GET(request: Request) {
  const { TELECOM_REGISTER_AUTH_SHA256, TELECOM_REGISTER_BLOB_KEY } = process.env;
  const unavailable = () => new Response("Register unavailable.", {
    status: 503,
    headers: privateHeaders,
  });
  if (!TELECOM_REGISTER_AUTH_SHA256 || !/^[a-f0-9]{64}$/i.test(TELECOM_REGISTER_AUTH_SHA256) ||
      !TELECOM_REGISTER_BLOB_KEY) {
    return unavailable();
  }

  const credentials = /^Basic ([A-Za-z0-9+/]{1,512}={0,2})$/i.exec(
    request.headers.get("authorization") ?? "",
  );
  const allowed = credentials && timingSafeEqual(
    createHash("sha256").update(Buffer.from(credentials[1], "base64")).digest(),
    Buffer.from(TELECOM_REGISTER_AUTH_SHA256, "hex"),
  );
  if (!allowed) {
    return new Response("Authentication required.", {
      status: 401,
      headers: { ...privateHeaders, "WWW-Authenticate": 'Basic realm="Telecom services", charset="UTF-8"' },
    });
  }

  try {
    const register = await getStore({ name: "telecom-register", consistency: "strong" })
      .get(TELECOM_REGISTER_BLOB_KEY, { type: "text" });
    if (!register) return unavailable();

    return new Response(register, {
      headers: {
        ...privateHeaders,
        "Content-Type": "text/html; charset=utf-8",
        "Content-Security-Policy": registerPolicy,
      },
    });
  } catch {
    console.error("Private telecom register could not be loaded.");
    return unavailable();
  }
}
