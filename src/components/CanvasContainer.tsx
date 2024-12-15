import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Experience from "./Experience";

const CanvasContainer = () => {
  return (
    <Canvas camera={{ position: [7, 0, 10] }}>
      {/* 真っ暗なものにEnviromentを使ってあげると表示される */}
      <Environment preset="city" />
      <Experience />
    </Canvas>
  );
};

export default CanvasContainer;
