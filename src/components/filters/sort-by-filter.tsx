import { Filter } from "./filter";

type Props = {
  value?: string;
  onChange: (v: string) => void;
};

export const SortByFilter = ({ value = "", onChange }: Props) => {
  const options = [
    {
      value: "",
      label: "Default",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "price",
      label: "Price",
    },
    {
      value: "rating",
      label: "Rating",
    },
  ];

  return (
    <Filter
      title="Order by"
      options={options}
      value={value}
      onChange={onChange}
    />
  );
};
