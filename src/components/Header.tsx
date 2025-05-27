const Header = () => {
  return (
    <>
      <div className="w-full fixed top-0 z-50 bg-red-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-red-200">
              COKE
            </div>
            <nav className="flex gap-8">
              <a className="cursor-pointer text-red-300 hover:text-red-200 transition-colors duration-300">
                Home
              </a>
              <a className="cursor-pointer text-red-300 hover:text-red-200 transition-colors duration-300">
                About
              </a>
              <a className="cursor-pointer text-red-300 hover:text-red-200 transition-colors duration-300">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
