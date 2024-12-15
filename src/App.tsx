import CanvasContainer from "./components/CanvasContainer";
import Page1 from "./components/Page/page1";
import Page2 from "./components/Page/page2";
import Page3 from "./components/Page/page3";
import Page4 from "./components/Page/page4";

function App() {
  return (
    <div className="">
      <div className="h-screen w-full fixed ">
        <CanvasContainer />
      </div>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  );
}

export default App;
