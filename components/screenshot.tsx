"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link2 } from "lucide-react";
import { toast } from "sonner";
// import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  setLogo: (newLogo: string) => void;
};

export default function Home({ setLogo }: Props) {
  const [url, setUrl] = useState("");
  const [screenshot, setScreenshot] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url) {
      toast.error("Please enter a URL");
      return;
    }

    try {
      // Validate URL format
      new URL(url);
    } catch {
      toast.error("Please enter a valid URL");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/screenshot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error("Failed to capture screenshot");
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      console.log(data);
      setScreenshot(data.screenshot);
      setLogo(data.screenshot);
      toast.success("Screenshot captured successfully!");
    } catch (err) {
      toast.error("Failed to capture screenshot. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-background via-background/90 to-secondary/30">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          {/* <div className="inline-flex items-center justify-center gap-3 px-4 py-2 rounded-full bg-primary/5 backdrop-blur-sm">
            <Globe2 className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">Website Screenshot Tool</h1>
          </div> */}
          <p className="text-muted-foreground text-lg">
            enter your startup URL and click capture.
          </p>
        </div>

        <Card className="p-6 border-2 shadow-none bg-card/50 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Link2 className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                  type="url"
                  placeholder="Enter website URL (e.g., https://example.com)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="px-6"
                size="lg"
              >
                {loading ? "Capturing..." : "Capture Screenshot"}
              </Button>
            </div>

            <div className="mt-4 flex flex-col space-y-4 border-2 p-4 rounded-lg">
              <Input placeholder="Enter your product name" />
              <Input placeholder="Enter your product tagline" />
              <Textarea placeholder="Enter your product description" />
            </div>
          </form>
        </Card>

        {/* {screenshot && (
          <Card className="p-6 border-2 shadow-lg overflow-hidden bg-card/50 backdrop-blur-sm">
            <div className="aspect-[16/9] relative overflow-hidden rounded-lg border bg-muted">
              <Image
                src={screenshot}
                alt="Website Screenshot"
                className="w-full h-full object-contain"
                width={1920}
                height={1080}
                loading="lazy"
              />
            </div>
            <div className="mt-4 text-center">
              <Button
                variant="outline"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = screenshot;
                  link.download = "screenshot.jpg";
                  link.click();
                }}
              >
                Download Screenshot
              </Button>
            </div>
          </Card>
        )} */}
      </div>
    </main>
  );
}
