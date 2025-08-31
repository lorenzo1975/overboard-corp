import { cn } from "@/lib/utils";
import Image from "next/image";

const RipCurlLogo = () => (
  <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-auto"
    fill="currentColor"
  >
    <g>
      <path
        d="M256.191 256.2c0 88.13-71.55 159.68-159.68 159.68-88.13 0-159.68-71.55-159.68-159.68 0-88.13 71.55-159.68 159.68-159.68 88.13 0 159.68 71.55 159.68 159.68z"
        className="text-red-600"
      />
      <path
        d="M511.951 334.34h-48.43c-6.09 0-11.45-3.32-14.1-8.52-3.15-6.19-8.4-23.03-8.4-23.03l-24.96-70.52-25.04 70.52s-5.25 16.84-8.4 23.03c-2.65 5.2-8.01 8.52-14.1 8.52h-27.18c-20.3 0-33.3-15.3-26.6-34.3l70.19-204.6c5.77-16.75 21.05-28.53 38.8-28.53h.2c17.75 0 33.03 11.78 38.8 28.53l70.19 204.6c6.7 19-6.3 34.3-26.6 34.3zm-119.5-181.82c-1.39 3.52-2.88 7.4-2.88 7.4l-25.05 70.22h55.99l-25.14-70.22s-1.5-3.88-2.92-7.4z"
        className="dark:text-white"
      />
    </g>
  </svg>
);


const brands = [
    { name: "Quiksilver", logo: "/images/logos/quiksilver.svg", invert: true, component: null },
    { name: "Roxy", logo: "/images/logos/roxy.svg", invert: true, component: null },
    { name: "Rip Curl", logo: "", invert: false, component: <RipCurlLogo /> },
    { name: "O'Neill", logo: "/images/logos/oneill.svg", invert: true, component: null },
    { name: "69Slam", logo: "/images/logos/69Slam.svg", invert: true, component: null },
    { name: "Havaianas", logo: "/images/logos/havaianas.svg", invert: false, component: null },
    { name: "Overboard", logo: "/images/logos/overboard.svg", invert: false, component: null },
];

const Brand = ({ name, logo, invert, component }: { name: string; logo: string; invert: boolean; component: React.ReactNode | null }) => (
  <li className="flex items-center justify-center mx-8">
    {component ? (
        component
    ) : (
        <Image
        src={logo}
        alt={`${name} logo`}
        width={120}
        height={40}
        className={cn("object-contain", invert && "dark:invert")}
        />
    )}
  </li>
);

export function BrandStrip() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-sm font-semibold text-center uppercase tracking-wider text-muted-foreground mb-8">
          Trusted Brands We Partner With
        </h3>
        <div
          className={cn(
            "group relative w-full overflow-hidden"
          )}
        >
          <div className="animate-marquee group-hover:paused flex">
            {brands.map((brand) => (
              <Brand key={brand.name} {...brand} />
            ))}
          </div>
          <div className="animate-marquee-continuation group-hover:paused flex absolute top-0">
             {brands.map((brand) => (
              <Brand key={`${brand.name}-2`} {...brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
