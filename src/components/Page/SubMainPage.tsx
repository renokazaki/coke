const SubMainPage = () => {
  return (
    <div className="page3 h-screen bg-gradient-to-r from-red-700 to-red-900 flex flex-col">
      <div className="flex-1 flex">
        <div className="w-1/2 flex items-center">
          <div className="text-4xl font-bold text-red-200 ml-16">
            コーラの楽しみ方
          </div>
        </div>
        <div className="w-1/2 flex items-center">
          <div className="text-xl text-red-300 max-w-2xl text-right mr-16">
            <ul className="space-y-4">
              <li>ストレートで楽しむ</li>
              <li>カクテルのベースとして</li>
              <li>食事と一緒に</li>
              <li>アイスクリームと組み合わせて</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubMainPage;
