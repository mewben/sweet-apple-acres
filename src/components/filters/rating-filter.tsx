import { useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Cross2Icon } from "@radix-ui/react-icons";

type Props = {
  minValue: string;
  maxValue: string;
  onChange: (data: Record<string, string>) => void;
};

export const RatingFilter = ({ minValue, maxValue, onChange }: Props) => {
  const [min, setMin] = useState(minValue);
  const [max, setMax] = useState(maxValue);

  const onApply = () => {
    onChange({ minRating: min, maxRating: max });
  };

  const onReset = () => {
    setMin("");
    setMax("");
    onChange({ minRating: "", maxRating: "" });
  };

  return (
    <div className="flex h-8 border border-dashed rounded-lg gap-1 items-center text-xs font-medium px-3">
      Rating
      <Separator orientation="vertical" className="mx-2 h-4" />
      <input
        type="number"
        min={0}
        max={5}
        value={min}
        className="border-0 p-1 no-extra-buttons"
        onChange={(e) => setMin(e.target.value)}
        placeholder="0"
      />
      <span>-</span>
      <input
        type="number"
        min={0}
        max={5}
        value={max}
        className="border-0 p-1 no-extra-buttons"
        onChange={(e) => setMax(e.target.value)}
        placeholder="5"
      />
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
