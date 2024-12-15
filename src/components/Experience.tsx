import { useFrame, useThree } from "@react-three/fiber";
import Can from "../../public/model/Can";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const Experience = () => {
  const { scene } = useThree();
  const model = useRef<THREE.Group>(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  // const { cameraX, cameraY, cameraZ } = useControls({
  //   cameraX: { value: 0, min: -10, max: 10, step: 0.1 },
  //   cameraY: { value: 0, min: -10, max: 10, step: 0.1 },
  //   cameraZ: { value: 0, min: -10, max: 10, step: 0.1 },
  // });

  // const { scenePositionX, scenePositionY, scenePositionZ } = useControls({
  //   scenePositionX: { value: 0, min: -10, max: 10, step: 0.1 },
  //   scenePositionY: { value: 0, min: -10, max: 10, step: 0.1 },
  //   scenePositionZ: { value: 0, min: -10, max: 10, step: 0.1 },
  // });

  // const { sceneRotationX, sceneRotationY, sceneRotationZ } = useControls({
  //   sceneRotationX: { value: 0, min: -10, max: 10, step: 0.01 },
  //   sceneRotationY: { value: 0, min: -10, max: 10, step: 0.01 },
  //   sceneRotationZ: { value: 0, min: -10, max: 10, step: 0.01 },
  // });

  useFrame(() => {
    // camera.position.x = cameraX;
    // camera.position.y = cameraY;
    // camera.position.z = cameraZ;
    // scene.position.x = scenePositionX;
    // scene.position.y = scenePositionY;
    // scene.position.z = scenePositionZ;
    // scene.rotation.x = sceneRotationX;
    // scene.rotation.y = sceneRotationY;
    // scene.rotation.z = sceneRotationZ;
  });

  useEffect(() => {
    //初期実行
    tl.to(scene.position, {
      x: 0,
      y: 0,
      z: 11,
      duration: 0.8, // スムーズな移動
    });

    // ページ2での処理
    if (model.current) {
      tl.to(model.current.rotation, {
        x: 1,
        y: 20,
        z: 0,
        duration: 0.6, // スムーズな移動
        scrollTrigger: {
          trigger: ".page2", // トリガー要素
          start: "top bottom", // トリガーが画面に入るタイミング
          end: "top top", // トリガーが画面上部に到達するタイミング
          scrub: true, // スムーズスクロール
          // markers: true, // デバッグ用マーカー
        },
      });
      tl.to(model.current.position, {
        x: 0,
        y: 0,
        z: -10,
        duration: 0.6, // スムーズな移動
        scrollTrigger: {
          trigger: ".page2", // トリガー要素
          start: "top bottom", // トリガーが画面に入るタイミング
          end: "top top", // トリガーが画面上部に到達するタイミング
          scrub: true, // スムーズスクロール
          // markers: true, // デバッグ用マーカー
        },
      });
    }

    //ページ3での処理

    if (model.current) {
      tl.to(model.current.rotation, {
        y: 20,
        duration: 0.6, // スムーズな移動
        scrollTrigger: {
          trigger: ".page3", // トリガー要素
          start: "top bottom", // トリガーが画面に入るタイミング
          end: "top top", // トリガーが画面上部に到達するタイミング
          scrub: true, // スムーズスクロール
          // markers: true, // デバッグ用マーカー
        },
      });
    }
  }, []);

  return (
    <>
      {/* <CameraControls /> */}
      <Can position={[5, -1.5, -3]} ref={model} />
    </>
  );
};

export default Experience;
