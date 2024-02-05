type Props = {
  amount: number;
  currencyCode: string;
};

export const Price = ({ amount, currencyCode }: Props) => {
  return (
    <>
      {`${new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currencyCode,
        currencyDisplay: "narrowSymbol",
      }).format(amount)}`}
    </>
  );
};
