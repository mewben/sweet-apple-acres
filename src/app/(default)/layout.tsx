import { CartSummary } from "~/components/cart/cart-summary";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { TooltipProvider } from "~/components/ui/tooltip";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TooltipProvider>
      <Header />
      <main className="container">{children}</main>
      <Footer />
      <CartSummary />
    </TooltipProvider>
  );
}
