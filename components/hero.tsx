import { Copy, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Hero() {
  return (
    <div className="container mx-auto  p-4 md:h-64 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col  gap-4 p-4">
        <div className="text-2xl md:text-5xl font-extrabold text-gray-500">
          A Backlink For Your Startup.
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <div className="bg-gray-50 hover:bg-gray-100 border-2 border-gray flex flex-row  gap-2 items-center rounded-lg px-2  cursor-pointer h-10">
              <Search color="gray" />
              <span className="text-mute">Search a product</span>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Share link</DialogTitle>
              <DialogDescription>
                Anyone who has this link will be able to view this.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input
                  id="link"
                  defaultValue="https://ui.shadcn.com/docs/installation"
                  readOnly
                />
              </div>
              <Button type="submit" size="sm" className="px-3">
                <span className="sr-only">Copy</span>
                <Copy />
              </Button>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* <div className="border-2 hidden md:flex">statistics here</div> */}
    </div>
  );
}
