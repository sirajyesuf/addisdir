import { Button } from "@/components/ui/button";
import { FolderClosed } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <FolderClosed className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold">AddisDir</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" className="font-bold text-md">
              Submit
            </Button>
            <Button variant="default" className="font-bold text-md">
              Login In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
