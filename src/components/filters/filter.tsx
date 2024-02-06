import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type Option = {
  value: string;
  label: string;
};

type Props = {
  title: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export function Filter({ title, options, value, onChange }: Props) {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          {title}
          {!!selectedOption && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <div className="flex space-x-1">
                <Badge
                  variant="secondary"
                  className="rounded-sm px-1 font-normal"
                >
                  {selectedOption.label}
                </Badge>
              </div>
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {options.map((option, i) => (
          <DropdownMenuCheckboxItem
            key={i}
            checked={option.value === value}
            onCheckedChange={() => onChange(option.value)}
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
