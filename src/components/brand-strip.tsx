import { cn } from "@/lib/utils";
import Image from "next/image";

const brands = [
  { name: "Quiksilver", logo: "/logos/quiksilver.svg" },
  { name: "Billabong", logo: "/logos/billabong.svg" },
  { name: "Roxy", logo: "/logos/roxy.svg" },
  { name: "Rip Curl", logo: "/logos/ripcurl.svg" },
  { name: "O'Neill", logo: "/logos/oneill.svg" },
  { name: "Patagonia", logo: "/logos/patagonia.svg" },
  { name: "GoPro", logo: "/logos/gopro.svg" },
  { name: "Oakley", logo: "/logos/oakley.svg" },
  { name: "Hurley", logo: "/logos/hurley.svg" },
  { name: "Vissla", logo: "/logos/vissla.svg" },
];

const Brand = ({ name, logo }: { name: string, logo: string }) => (
  <li className="flex items-center justify-center mx-8">
    <Image 
      src={logo} 
      alt={`${name} logo`}
      width={120}
      height={40}
      className="object-contain"
    />
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
              <Brand key={brand.name} name={brand.name} logo={brand.logo} />
            ))}
          </div>
          <div className="animate-marquee-continuation group-hover:paused flex absolute top-0">
             {brands.map((brand) => (
              <Brand key={`${brand.name}-2`} name={brand.name} logo={brand.logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
