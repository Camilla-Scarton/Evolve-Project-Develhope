import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { BodyModel } from "./BodyModel";
import gsap from "gsap";
import { Outlet } from "react-router";

export default function FirstCanvas() {
  const cameraRef = useRef();
  const camRef = useRef();

  function triggerAnimation({ x, y, z }) {
    gsap.to(cameraRef.current?.target, {
      duration: 1,
      y: y - 2,
      x: x,
      z: z,
    });
    gsap.to(cameraRef.current, {
      duration: 1,
      maxDistance: 4,
    });
  }
  function handlePosition() {
    gsap.to(cameraRef.current?.target, {
      duration: 1,
      y: 0,
      x: 0,
      z: 0,
    });
    gsap.to(cameraRef.current, {
      duration: 0,
      maxDistance: 8,
    });
    gsap.to(camRef.current.position, {
      duration: 1,
      x: -1.2,
      y: 2.5,
      z: 7,
    });
  }
  return (
    <div className="min-h-[500px] w-full h-full relative">
      <Suspense fallback={null}>
        <Canvas
          shadows
          style={{ height: "550px" }}
          className="min-h-[500px] w-full h-full bg-[rgba(13,0,255,0.7)] bg-white dark:bg-slate-900 justify-center items-center"
        >
          <spotLight
            angle={0.339292006587698}
            args={["#Fffee7", 0.2, -30]}
            position={[-45, 60, 70]}
            penumbra={1}
            castShadow
          />
          <spotLight
            angle={0.339292006587698}
            args={["#Fffee7", 0.2, -30]}
            position={[-45, 60, -70]}
            penumbra={1}
            castShadow
          />
          <spotLight
            angle={0.339292006587698}
            args={["#DDF0FF", 0.2, -30]}
            position={[45, 60, 70]}
            penumbra={1}
            castShadow
          />
          <spotLight
            angle={0.339292006587698}
            args={["#DDF0FF", 0.2, -30]}
            position={[45, 60, -70]}
            penumbra={1}
            castShadow
          />
          <ambientLight args={["#ffffff", 0.1]} />
          <PerspectiveCamera
            ref={camRef}
            position={[-1.2, 2.5, 7]}
            makeDefault
          />
          <OrbitControls
            ref={cameraRef}
            maxDistance={8}
            position={[0, 0, 0]}
            maxPolarAngle={1.9}
            enableZoom={false}
          />
          <BodyModel
            position={[0, -3.5, 0]}
            triggerAnimation={triggerAnimation}
            rotation={[0, 3, 0]}
            castShadow
            scale={1.5}
          />
          <mesh rotation={[-1.58, 0, 0]} position={[0, -3.54, 0]} receiveShadow>
            <circleGeometry args={[70, 70]} />
            <meshStandardMaterial color="#0000ff" />
          </mesh>
        </Canvas>
      </Suspense>
      <button className="absolute bottom-1 left-1 inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
        <span className="absolute inline-block inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
        <span className="absolute inline-block bottom-0 right-0  w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span
          onClick={handlePosition}
          className="relative inline-block text-white"
        >
          Zoom out
        </span>
      </button>
      <Outlet />
    </div>
  );
}
