const MainPage = () => {
  return (
    <div className="page2 h-screen bg-red-700 flex flex-col">
      <div className="flex-1 flex">
        <div className="w-1/2 flex items-center">
          <div className="text-4xl font-bold text-red-200 ml-16">
            コーラの魅力
          </div>
        </div>
        <div className="w-1/2 flex items-end">
          <div className="text-xl text-red-300 max-w-2xl text-right mr-16">
            <ul className="space-y-4">
              <li>爽快な炭酸感と甘さの絶妙なバランス</li>
              <li>氷と相性抜群の冷たい飲み物</li>
              <li>食事の締めくくりに最適な味わい</li>
              <li>世界中で愛される普遍的な味</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
