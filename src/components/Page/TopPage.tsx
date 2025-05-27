const TopPage = () => {
  return (
    <div className="page1 h-screen flex flex-col">
      <div className="flex-1 flex">
        <div className="w-1/2 flex items-end">
          <div className="text-[8rem] font-bold text-red-200 tracking-wider mb-8 ml-16">
            COKE
          </div>
        </div>
        <div className="w-1/2 flex items-end">
          <div className="text-2xl text-red-300 max-w-2xl text-right mr-16">
            世界中で愛されるコーラの魅力を伝える
            <br />
            伝統と革新が融合した味わい
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
