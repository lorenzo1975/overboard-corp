# Overboard site release

Netlify builds the `main` branch of `lorenzo1975/overboard-corp` with `npm run build` and publishes `.next`. Use the tracked `package-lock.json` with `npm ci` for local verification. The `.nvmrc` selects Node 22 for builds. Netlify normally uses the same Node major for Functions.

## Contact form

The form posts to the Netlify function at `/api/contact`. Netlify limits submissions to 10 requests per minute per IP and domain. The function rejects an invalid origin, malformed or oversized JSON, invalid fields, and a filled bot-trap field before calling Mailgun. Keep the existing Mailgun variables in Functions.

Verify successful delivery with a local Mailgun stub and check that invalid input and the bot-trap field cause zero delivery calls. Coordinate the recipient and time before sending a live test.

## Telecom register

The route reads the original, reviewed register HTML from a private Netlify Blobs store. Keep the HTML outside the source checkout and publish directory. Use an approved version of the attachment and a versioned blob key.

1. Link the CLI to the existing Overboard Netlify project and confirm its domain. Upload the private attachment using `netlify blobs:set telecom-register register-v1.html --input "$REGISTER_PATH"`, with `REGISTER_PATH` set to the local attachment.
2. Create a random password of at least 128 bits in a password manager. Use Koy's email as the browser login username and compute the digest of the exact `username:password` pair with the command below. Enter the digest as a secret in `TELECOM_REGISTER_AUTH_SHA256` and the blob key in `TELECOM_REGISTER_BLOB_KEY`. Scope both to production Functions. Share the login with Koy privately.
3. Check an unauthenticated request and a wrong password return 401, valid credentials return the HTML with `Cache-Control: private, no-store`, and direct requests for the HTML file and its blob key return 404. Repeat the logged-out check immediately after a successful request. Confirm the shop and user filter works in a browser.

```sh
python3 -c 'import getpass, hashlib; user = input("Username: "); password = getpass.getpass("Password: "); print(hashlib.sha256(f"{user}:{password}".encode()).hexdigest())'
```

The route replaces the attachment's original inline filter script with the site's shop, user, and provider filters. The response permits only that script and the reviewed stylesheet by CSP hash. Review and update the stylesheet hash in the route if its contents change.

## Release and rollback

Before publishing, run the Netlify build and save the currently published deploy ID. When production configuration is ready, publish and smoke-test the public pages, the contact form, and the authenticated register. Check Netlify's deploy post-processing for rate limit configuration errors.

The November 2026 dependency refresh was integrated for development without publishing it. Local lint, typecheck and webpack build passed, and the public pages and store-card layout were checked in a browser. Local Google Maps credentials were unavailable; the existing production store map was checked separately. Complete the Netlify build and the release checks above before publishing the refresh. A later push to `main` without `[skip netlify]` can deploy all pending changes, so coordinate that push as a release.

The current rollback target recorded before the update is [deploy `696df49cb60e12000835ac25`](https://app.netlify.com/projects/glistening-sfogliatella-6e7620/deploys/696df49cb60e12000835ac25) at commit `fcd9d6a`. Use **Publish deploy** on the previous successful deploy to restore it. If Git auto-publishing is active, lock the restored deploy until the release issue is resolved.
