const BottomPage = () => {
  return (
    <div className="page4 h-screen bg-red-900 flex flex-col">
      <div className="flex-1 flex">
        <div className="w-1/2 flex items-center">
          <div className="text-4xl font-bold text-red-200 ml-16">
            コーラの歴史
          </div>
        </div>
        <div className="w-1/2 flex items-end">
          <div className="text-xl text-red-300 max-w-2xl text-right mr-16 mb-16">
            1886年に誕生したコーラは、
            <br />
            世界中で愛され続ける伝統の味
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-16">
        <button className="group relative overflow-hidden rounded-full px-8 py-4 bg-red-500 hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/50">
          <span className="relative z-10 text-white font-bold">詳細を見る</span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
};

export default BottomPage;
