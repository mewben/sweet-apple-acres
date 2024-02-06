import { useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Input } from "../ui/input";

type Props = {
  minValue?: string;
  maxValue?: string;
  onChange: (data: Record<string, string>) => void;
};

export const PriceFilter = ({
  minValue = "",
  maxValue = "",
  onChange,
}: Props) => {
  const [min, setMin] = useState(minValue);
  const [max, setMax] = useState(maxValue);

  const onApply = () => {
    onChange({ minPrice: min, maxPrice: max });
  };

  const onReset = () => {
    setMin("");
    setMax("");
    onChange({ minPrice: "", maxPrice: "" });
  };

  return (
    <div className="flex h-8 border border-dashed rounded-lg gap-1 items-center text-xs font-medium px-3">
      Price
      <Separator orientation="vertical" className="mx-2 h-4" />
      <div>
        <span>$</span>
        <Input
          type="number"
          min={0}
          value={min}
          className="inline border-0 p-1 w-12 no-extra-buttons h-5 rounded-sm"
          onChange={(e) => setMin(e.target.value)}
          placeholder="0.00"
        />
      </div>
      <span>-</span>
      <div>
        <span>$</span>
        <Input
          type="number"
          min={0}
          value={max}
          className="inline border-0 p-1 w-12 no-extra-buttons h-5 rounded-sm"
          onChange={(e) => setMax(e.target.value)}
          placeholder="0.00"
        />
      </div>
      <div className="flex items-center">
        <Button
          variant="outline"
          size="sm"
          className="h-[22px] rounded-tr-none rounded-br-none"
          onClick={onApply}
        >
          Apply
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-[22px] rounded-tl-none rounded-bl-none border-l-0 w-6"
          onClick={onReset}
        >
          <Cross2Icon className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};
