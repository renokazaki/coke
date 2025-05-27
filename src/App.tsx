import { Suspense } from "react";
import CanvasContainer from "./components/CanvasContainer";
import Header from "./components/Header";
import BottomPage from "./components/Page/BottomPage";
import MainPage from "./components/Page/MainPage";
import SubMainPage from "./components/Page/SubMainPage";
import TopPage from "./components/Page/TopPage";

function App() {
  return (
    <div className="bg-red-700">
      <Header />
      <div className="h-screen w-full fixed ">
        <Suspense fallback={null}>
          <CanvasContainer />
        </Suspense>
      </div>
      <TopPage />
      <MainPage />
      <SubMainPage />
      <BottomPage />
    </div>
  );
}

export default App;
