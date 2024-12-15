import CanvasContainer from "./components/CanvasContainer";
import BottomPage from "./components/Page/BottomPage";
import MainPage from "./components/Page/MainPage";
import SubMainPage from "./components/Page/SubMainPage";
import TopPage from "./components/Page/TopPage";

function App() {
  return (
    <div className="">
      <div className="h-screen w-full fixed ">
        <CanvasContainer />
      </div>
      <TopPage />
      <MainPage />
      <SubMainPage />
      <BottomPage />
    </div>
  );
}

export default App;
