import Image from "next/image";
import { Card } from "@/components/ui/card";

type product = {
  name: string;
  slogan: string;
  logo: string;
};

export default function Product({ name, slogan, logo }: product) {
  return (
    <Card className="overflow-hidden  hover:shadow-lg hover:border-2 transition-shadow height-[400px] rounded-2xl bg-white">
      <div className="flex flex-col gap-4 items-center p-2">
        {/* <div className="flex-shrink-0">
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-20 w-20 rounded-lg overflow-hidden bg-secondary"
          >
            <img
              src={product.logo}
              alt={product.name}
              className="h-full w-full object-cover transition-opacity group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
              <ExternalLink className="h-6 w-6 text-white opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </a>
        </div> */}
        <div className="border-none  md:h-[300px] w-[80%] bg-red-400 rounded-2xl mt-4">
          <Image
            src={logo}
            alt={name}
            width={1852}
            height={962}
            quality={100}
            className="h-full w-full object-contain md:object-contain transition-opacity group-hover:opacity-80 rounded-2xl shadow-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-muted-foreground mt-1">{slogan}</p>
        </div>
      </div>
    </Card>
  );
}
