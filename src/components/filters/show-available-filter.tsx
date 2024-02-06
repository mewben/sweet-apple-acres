import { Filter } from "./filter";

type Props = {
  value?: string;
  onChange: (v: string) => void;
};

export const ShowAvailableFilter = ({ value = "", onChange }: Props) => {
  const options = [
    {
      value: "",
      label: "All",
    },
    {
      value: "true",
      label: "In stock",
    },
    {
      value: "false",
      label: "Out of stock",
    },
  ];

  return (
    <Filter title="Show" options={options} value={value} onChange={onChange} />
  );
};
