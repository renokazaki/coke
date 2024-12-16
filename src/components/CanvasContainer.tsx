import { Canvas } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import Experience from "./Experience";

const CanvasContainer = () => {
  return (
    <Canvas camera={{ position: [2, 0, 5] }}>
      <ambientLight intensity={20} />
      {/* 真っ暗なものにEnviromentを使ってあげると表示される */}
      <Environment preset="city" />
      <Stars
        radius={10} // 星の点滅(拡大)度合い
        depth={50} // 星の深さ
        count={1500} // 星の数
        factor={5} // 星の大きさ
        saturation={9} // 星の彩度
        speed={2} // 点滅のスピード
      />
      <Experience />
    </Canvas>
  );
};

export default CanvasContainer;
