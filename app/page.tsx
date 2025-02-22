import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Product from "@/components/product";
import {
  Rocket,
  ShoppingBag,
  Cpu,
  Gamepad2,
  PenTool,
  Building2,
} from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Home() {
  const tags = [
    { name: "Trending" },
    { name: "New" },
    { name: "AI/ML" },
    { name: "Open Source" },
    { name: "Developer Tools" },
    { name: "Productivity" },
    { name: "Marketing" },
    { name: "Analytics" },
    { name: "Mobile" },
    { name: "Web3" },
  ];

  const categories = [
    { name: "Development", icon: Rocket, count: 128 },
    { name: "Design", icon: ShoppingBag, count: 85 },
    { name: "Marketing", icon: Cpu, count: 64 },
    { name: "Business", icon: Gamepad2, count: 42 },
    { name: "Personal Life", icon: PenTool, count: 37 },
    { name: "For Sale", icon: Building2, count: 29 },
  ];

  const products = [
    {
      name: "ProductHunt Clone",
      slogan: "Discover tomorrow's products today",
      description: "A platform for discovering new products and startups",
      category: "SaaS",
      logo: "/arifpay.png",
      tags: ["Community", "Tech"],
      votes: 156,
      url: "https://producthunt.com",
    },
    {
      name: "AI Writing Assistant",
      slogan: "Write smarter, not harder",
      description: "AI-powered writing tool for better content creation",
      category: "Tech",
      logo: "/chapa.png",
      tags: ["AI/ML", "Productivity", "Content"],
      votes: 142,
      url: "https://producthunt.com",
    },
    {
      name: "Beu Delivery",
      slogan: "Food delivery for everyone!",
      description:
        "The food you want, where you want it. The best restaurants in town and the fastest delivery guys eagerly waiting to serve you! All with a click of a buton.",
      category: "Enterprise",
      logo: "/beudelivery.png",
      tags: ["Collaboration", "remote", "Team"],
      votes: 98,
      url: "https://producthunt.com",
    },

    {
      name: "Remote Team Hub",
      slogan: "Bringing remote teams closer together",
      description: "All-in-one platform for remote team collaboration",
      category: "Enterprise",
      logo: "/hahucloud.png",
      tags: ["Collaboration", "remote", "Team"],
      votes: 98,
      url: "https://producthunt.com",
    },
    {
      name: "hahu screenshot",
      slogan: "Bringing remote teams closer together",
      description: "All-in-one platform for remote team collaboration",
      category: "Enterprise",
      logo: "/hahuscreenshot.jpg",
      tags: ["Collaboration", "remote", "Team"],
      votes: 98,
      url: "https://producthunt.com",
    },
  ];
  return (
    <div>
      <NavBar />
      <div className="bg-gray-50 mb-2">
        <Hero />
      </div>

      <main className="bg-white container mx-auto grid  grid-cols-1 md:grid-cols-4 gap-y-2 md:gap-x-2 p-2 min-h-screen">
        <div className="col-span-3 order-1 md:order-none space-y-4 sm:mt-4">
          <div className="space-y-4">
            <h2 className="text-xl md:text-3xl font-bold">
              Development Products
            </h2>
            <p className="text-md md:text-2xl font-sm md:w-[50%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus sit fugiat eius ad totam, aliquid expedita ullam amet
              asperiores odio vero necessitatibus soluta vitae praesentium
              labore quae repellat.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Button
                key={tag.name}
                variant="secondary"
                className="flex items-center space-x-1 px-4 py-2 h-9 rounded-lg"
              >
                <span>{tag.name}</span>
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {products.map((product, index) => (
              <Product
                key={index}
                name={product.name}
                slogan={product.slogan}
                logo={product.logo}
              />
            ))}
          </div>
        </div>

        <div className="">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Categories</h2>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => (
                <Card
                  key={category.name}
                  className="p-4 hover:bg-accent cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <category.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    {/* <span className="text-sm text-muted-foreground">
                      {category.count}
                    </span> */}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
