import { Filter } from "./filter";

type Props = {
  value?: string;
  onChange: (v: string) => void;
};

export const SortFilter = ({ value = "", onChange }: Props) => {
  const options = [
    {
      value: "",
      label: "Default",
    },
    {
      value: "ASC",
      label: "Ascending",
    },
    {
      value: "DESC",
      label: "Descending",
    },
  ];

  return (
    <Filter title="Sort" options={options} value={value} onChange={onChange} />
  );
};
