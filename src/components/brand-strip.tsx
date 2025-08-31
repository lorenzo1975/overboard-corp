import { cn } from "@/lib/utils";

const brands = [
  { name: "Quiksilver" },
  { name: "Billabong" },
  { name: "Roxy" },
  { name: "Rip Curl" },
  { name: "O'Neill" },
  { name: "Patagonia" },
  { name: "GoPro" },
  { name: "Oakley" },
  { name: "Hurley" },
  { name: "Vissla" },
];

const Brand = ({ name }: { name: string }) => (
  <li className="flex items-center justify-center text-xl font-bold text-muted-foreground whitespace-nowrap mx-8">
    {name}
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
              <Brand key={brand.name} name={brand.name} />
            ))}
          </div>
          <div className="animate-marquee-continuation group-hover:paused flex absolute top-0">
             {brands.map((brand) => (
              <Brand key={`${brand.name}-2`} name={brand.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
