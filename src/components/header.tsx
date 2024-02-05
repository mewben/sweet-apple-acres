import { CartIcon } from "./cart/cart-icon";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <nav className="relative border-b mb-12 py-4">
      <div className="flex items-center justify-between container">
        <div className="flex w-1/3 justify-start">
          <Logo labelClassName="hidden md:block" />
        </div>
        <div className="flex w-1/3 justify-center">TODO: Search bar</div>
        <div className="flex w-1/3 justify-end">
          <CartIcon />
        </div>
      </div>
    </nav>
  );
};
