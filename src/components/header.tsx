import Link from "next/link";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <nav className="relative border-b mb-12 py-4">
      <div className="flex items-center justify-between container">
        <div className="flex w-1/3 justify-start">
          <Button
            variant="link"
            asChild
            className="pl-0 tracking-tight font-semibold text-lg"
          >
            <Link href="/">
              <span>🍎 </span>
              <span className="hidden md:block">Sweet Apple Acres</span>
            </Link>
          </Button>
        </div>
        <div className="flex w-1/3 justify-center">TODO: Search bar</div>
        <div className="flex w-1/3 justify-end">TODO: Cart Icon</div>
      </div>
    </nav>
  );
};
