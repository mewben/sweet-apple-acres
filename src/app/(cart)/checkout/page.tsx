import Link from "next/link";
import { ShippingForm } from "~/components/cart/shipping-form";

export default async function CheckoutPage() {
  return (
    <div className="flex flex-row-reverse justify-center min-h-screen">
      <div className="w-1/2 p-24">Order Summary</div>
      <div className="w-1/2 p-24 flex justify-end">
        <div className="flex flex-col max-w-lg w-full">
          <Link href="/" className="font-semibold text-xl">
            <span>🍎</span>
            <span>Sweet Apple Acres</span>
          </Link>
          <ShippingForm />
        </div>
      </div>
    </div>
  );
}
