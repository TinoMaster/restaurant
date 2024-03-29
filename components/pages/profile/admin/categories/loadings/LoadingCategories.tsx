export function LoadingCategories() {
  return (
    <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-pulse container">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <div
          key={item}
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 bg-slate-600/30 h-24 rounded-lg"
        ></div>
      ))}
    </div>
  );
}
