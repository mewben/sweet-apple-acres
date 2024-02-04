export const Header = () => {
  return (
    <nav className="relative border-b mb-12 py-4">
      <div className="flex items-center justify-between container">
        <div className="flex w-1/3 justify-start">
          <h1 className="text-xl font-semibold tracking-tight flex items-center">
            <span>🍎 </span>
            <span className="hidden md:block">Sweet Apple Acres</span>
          </h1>
        </div>
        <div className="flex w-1/3 justify-center">TODO: Search bar</div>
        <div className="flex w-1/3 justify-end">TODO: Cart Icon</div>
      </div>
    </nav>
  );
};
