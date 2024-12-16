import { useThree } from "@react-three/fiber";
import Can from "../../public/model/Can";
import Cans from "../../public/model/Cans";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect, useRef } from "react";
import * as THREE from "three";
// import { CameraControls } from "@react-three/drei";
// import { useControls } from "leva";

const Experience = () => {
  const { scene } = useThree();
  // console.log(camera.position);
  const model = useRef<THREE.Group>(null);
  const submodel = useRef<THREE.Group>(null);

  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  // const { cameraX, cameraY, cameraZ } = useControls({
  //   cameraX: { value: camera.position.x, min: -10, max: 10, step: 0.1 },
  //   cameraY: { value: camera.position.y, min: -10, max: 10, step: 0.1 },
  //   cameraZ: { value: camera.position.z, min: -10, max: 10, step: 0.1 },
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

  // useFrame(() => {
  //   // camera.position.x = cameraX;
  //   // camera.position.y = cameraY;
  //   // camera.position.z = cameraZ;
  //   // scene.position.x = scenePositionX;
  //   // scene.position.y = scenePositionY;
  //   // scene.position.z = scenePositionZ;
  //   // scene.rotation.x = sceneRotationX;
  //   // scene.rotation.y = sceneRotationY;
  //   // scene.rotation.z = sceneRotationZ;
  // });

  useEffect(() => {
    // submodelの動作
    if (submodel.current) {
      tl.to(submodel.current.position, {
        x: -1.4,
        y: -1.5,
        z: -1,
        duration: 0.6, // スムーズな移動
        scrollTrigger: {
          trigger: ".page4", // トリガー要素
          start: "top bottom", // トリガーが画面に入るタイミング
          end: "top top", // トリガーが画面上部に到達するタイミング
          scrub: true, // スムーズスクロール
          // markers: true, // デバッグ用マーカー
        },
      });
      tl.to(submodel.current.rotation, {
        x: -0.2,
        y: 0.4,
        z: 0.1,
        duration: 0.6, // スムーズな移動
        scrollTrigger: {
          trigger: ".page4", // トリガー要素
          start: "top bottom", // トリガーが画面に入るタイミング
          end: "top top", // トリガーが画面上部に到達するタイミング
          scrub: true, // スムーズスクロール
          // markers: true, // デバッグ用マーカー
        },
      });
    }

    // ページ2での処理;
    if (model.current) {
      tl.to(model.current.rotation, {
        x: 0,
        y: 10,
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
    }

    //ページ3での処理

    if (model.current) {
      tl.to(model.current.rotation, {
        y: 10,
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

    //ページ4での処理

    if (model.current) {
      tl.to(model.current.rotation, {
        y: 15,
        duration: 0.6, // スムーズな移動
        scrollTrigger: {
          trigger: ".page4", // トリガー要素
          start: "top bottom", // トリガーが画面に入るタイミング
          end: "top top", // トリガーが画面上部に到達するタイミング
          scrub: true, // スムーズスクロール
          // markers: true, // デバッグ用マーカー
        },
      });
      tl.to(model.current.position, {
        x: 1.98,
        y: -1,
        z: 5,
        duration: 0.6, // スムーズな移動
        scrollTrigger: {
          trigger: ".page4", // トリガー要素
          start: "top bottom", // トリガーが画面に入るタイミング
          end: "top top", // トリガーが画面上部に到達するタイミング
          scrub: true, // スムーズスクロール
          // markers: true, // デバッグ用マーカー
        },
      });
      tl.to(model.current.rotation, {
        y: 2.2,
        duration: 0.6, // スムーズな移動
        scrollTrigger: {
          trigger: ".page4", // トリガー要素
          start: "top bottom", // トリガーが画面に入るタイミング
          end: "top top", // トリガーが画面上部に到達するタイミング
          scrub: true, // スムーズスクロール
          // markers: true, // デバッグ用マーカー
        },
      });
    }
    tl.to(scene.position, {
      x: -2.1,
      z: -5,
      duration: 0.6, // スムーズな移動
      scrollTrigger: {
        trigger: ".page4", // トリガー要素
        start: "top bottom", // トリガーが画面に入るタイミング
        end: "top top", // トリガーが画面上部に到達するタイミング
        scrub: true, // スムーズスクロール
        // markers: true, // デバッグ用マーカー
      },
    });
  }, []);

  return (
    <>
      <Can rotation={[0, 0, -0.5]} ref={model} />
      <Cans
        scale={0.025}
        rotation-x={-0.5}
        rotation-z={1}
        rotation-y={0.5}
        position={[-5, 2, -8]}
        ref={submodel}
      />
    </>
  );
};

export default Experience;
