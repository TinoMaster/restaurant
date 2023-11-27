interface ItemMenuProps {
  title: string;
  description: string;
  price: number;
}

export const ItemMenu = ({ title, description, price }: ItemMenuProps) => {
  return (
    <div className="flex flex-wrap justify-between items-center w-full">
      <h3 className="lg:text-base text-sm text-primary font-bold uppercase">{title}</h3>
      <span className="text-s hidden lg:block">----------------------</span>
      <p className="lg:text-lg text-primary font-bold">{`€ ${price}.00`}</p>
      <p className="w-full text-sm lg:text-base text-slate-300">
        {description}
      </p>
    </div>
  );
};
