interface RenderMenusProps {
  category: string;
}

export function RenderMenus({ category }: RenderMenusProps) {
  return (
    <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <p>{category}</p>
    </div>
  );
}
