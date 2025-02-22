"use client";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Product from "@/components/product";
import Screenshot from "@/components/screenshot";
import { useState } from "react";

export default function Home() {
  const product = {
    name: "AI Writing Assistant",
    slogan: "Write smarter, not harder",
    description: "AI-powered writing tool for better content creation",
    category: "Tech",
    logo: "/chapa.png",
    tags: ["AI/ML", "Productivity", "Content"],
    votes: 142,
    url: "https://producthunt.com",
  };

  const [logo, setLogo] = useState(product.logo);
  function handleLogoChange(newLogo: string) {
    setLogo(newLogo);
  }

  return (
    <div>
      <NavBar />

      <main className="container mx-auto grid  grid-cols-1 md:grid-cols-4 gap-y-2 md:gap-x-2 p-2 min-h-screen">
        <div className="p-4 border-none col-span-2">
          {/* <Card className="bg-gray-50 shadow-md border-b-4 border-red-400 rounded-lg p-2">
            <CardHeader className="flex flex-row items-center gap-4 p-2 bg-gray-50">
              <div className="w-[60px] h-[60px]  rounded-full">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="bg-white p-4 w-full h-full object-contain rounded-full"
                />
              </div>

              <div className="self-start">
                <h1 className="text-xl font-bold text-gray-950">hahucloud</h1>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-950">
                Top web hosting services in Ethiopia
              </p>
            </CardContent>
            <CardFooter className="flex flex-row gap-4 font-mute font-sm text-foreground">
              <p>#web hosting</p>
              <p># domain</p>
              <p># hosting</p>
            </CardFooter>
          </Card> */}
          <Product name={product.name} slogan={product.slogan} logo={logo} />
        </div>

        <div className="col-span-2 order-1 md:order-none space-y-4  border-none">
          <Screenshot setLogo={handleLogoChange} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
