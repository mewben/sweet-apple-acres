import { Button } from "../ui/button";

type Props = {
  disabled?: boolean;
};

export const AddToCart = ({ disabled }: Props) => {
  return (
    <div className="pt-8">
      <Button
        aria-label="Add to cart"
        size="lg"
        className="w-full"
        disabled={disabled}
      >
        Add to cart
      </Button>
    </div>
  );
};
