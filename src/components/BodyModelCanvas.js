import React, { Suspense, useEffect, useRef, useState, } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { BodyModel } from "./BodyModel";
import gsap, { Power1 } from "gsap";
import { Outlet, useParams } from "react-router";

export default function FirstCanvas() {
  const cameraRef = useRef();
  const camRef = useRef();
  const canvasRef = useRef();
  const canvasRef2 = useRef();
  const { bodyPart } = useParams();
  const [isBodypartSelected, setisBodypartSelected] = useState(false);

  const body = document.body;
  
  
  function triggerAnimation({ x, y, z }) {
    if (!isBodypartSelected) {
      gsap.fromTo(
        canvasRef.current,
        { width: body.clientWidth },
        {
          duration: 0.3,
          width: body.clientWidth / 2,
          ease: Power1.easeInOut,
        }
      );
      gsap.fromTo(
        camRef.current.scale,
        {x: 1},
        {
          duration: 0.3,
          x: 1,
          ease: Power1.easeInOut,
        }
      )
      gsap.set(canvasRef2.current,
        { width: "50%" });
    } 
      console.log("triggerata animazione");
    gsap.to(cameraRef.current?.target, {
      duration: 0.3,
      y: y - 2,
      x: x,
      z: z,
      ease: Power1.easeInOut,
    });
  
    gsap.to(cameraRef.current, {
      duration: 0.3,
      maxDistance: 4,
      ease: Power1.easeInOut,
    });
  }

  function handlePosition() {
    gsap.to(cameraRef.current?.target, {
      duration: 1,
      y: 0,
      x: 0,
      z: 0,
      ease: Power1.easeInOut,
    });
    gsap.to(cameraRef.current, {
      duration: 0,
      maxDistance: 8,
      ease: Power1.easeInOut,
    });
    gsap.to(camRef.current.position, {
      duration: 1,
      x: -1.2,
      y: 2.5,
      z: 7,
      ease: Power1.easeInOut,
    });
  }

  useEffect(() => {
    if (bodyPart) {
      setisBodypartSelected(true);
    } else {
      setisBodypartSelected(false);
    }
  }, [bodyPart, isBodypartSelected]);


  return (
    <>
      <div
        ref={canvasRef2}
        key="Canvas"
        className="min-h-[500px] h-[83vh] relative w-full"
      >
        <Suspense fallback={null}>
          <Canvas
            ref={canvasRef}
            shadows
            className="min-h-[500px] w-fit bg-[rgba(13,0,255,0.7)] bg-white dark:bg-slate-900 justify-center items-center"
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
            <mesh
              rotation={[-1.58, 0, 0]}
              position={[0, -3.54, 0]}
              receiveShadow
            >
              <circleGeometry args={[70, 70]} />
              <meshStandardMaterial color="#0000ff" />
            </mesh>
          </Canvas>
        </Suspense>
        <button className="absolute bottom-1 left-1 inline-flex items-center justify-center overflow-hidden font-medium transition duration-300 ease-out rounded-full group">
          <span
            onClick={handlePosition}
            className="relative inline-block drop-shadow-xl text-white bg-gradient-to-r rounded-md px-10 py-2 m-5 
            from-blue-900 to-purple-800 hover:from-purple-800 dark:hover:from-blue-400 dark:hover:to-violet-500
            hover:to-blue-900  hover:scale-105 transition-all duration-200 active:shadow-[0px_0px_30px_-0px_rgba(145,82,245,0.6)]
            dark:to-blue-400 dark:from-violet-500"
          >
            Zoom out
          </span>
        </button>
      </div>
      <Outlet />
    </>
  );
}
