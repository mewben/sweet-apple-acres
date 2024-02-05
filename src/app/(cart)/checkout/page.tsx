import { OrderSummaryWrapper } from "~/components/cart/order-summary";
import { ShippingFormWrapper } from "~/components/cart/shipping-form";
import { Logo } from "~/components/logo";

export default async function CheckoutPage() {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-center min-h-screen">
      <div className="md:w-1/2 p-24 bg-gray-50">
        <div className="flex flex-col max-w-lg w-full">
          <Logo className="flex md:hidden mb-12" />
          <OrderSummaryWrapper />
        </div>
      </div>
      <div className="md:w-1/2 p-24 flex justify-end">
        <div className="flex flex-col max-w-lg w-full">
          <Logo className="hidden md:flex mb-12" />
          <ShippingFormWrapper />
        </div>
      </div>
    </div>
  );
}
