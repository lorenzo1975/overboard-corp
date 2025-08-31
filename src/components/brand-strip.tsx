import { cn } from "@/lib/utils";
import Image from "next/image";

const brands = [
  { name: "Quiksilver", logo: "/images/logos/quiksilver.svg" },
  { name: "Roxy", logo: "/images/logos/roxy.svg" },
  { name: "Rip Curl", logo: "/images/logos/ripcurl.svg" },
  { name: "O'Neill", logo: "/images/logos/oneill.svg" },
  { name: "69Slam", logo: "/images/logos/69Slam.svg" },
  { name: "Havaianas", logo: "/images/logos/havaianas.svg" },
  { name: "Overboard", logo: "/images/logos/overboard.svg" },


];

const Brand = ({ name, logo }: { name: string, logo: string }) => (
  <li className="flex items-center justify-center mx-8">
    <Image 
      src={logo} 
      alt={`${name} logo`}
      width={120}
      height={40}
      className="object-contain dark:invert"
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
