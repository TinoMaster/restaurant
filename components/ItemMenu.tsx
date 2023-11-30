interface ItemMenuProps {
  title: string;
  description: string;
  price: number;
}

export const ItemMenu = ({ title, description, price }: ItemMenuProps) => {
  return (
    <div className="flex flex-wrap justify-between items-center w-full">
      <div className="w-full flex justify-between items-center">
        <h6 className="text-primary uppercase">{title}</h6>
        <p className="grow text-center text-xs">------</p>
        <h6 className="text-primary">{`€ ${price}.00`}</h6>
      </div>
      <p className="w-full text-gray-300 opacity-80 text-sm">{description}</p>
    </div>
  );
};
