import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
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
      console.log("triggerata animazione");
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
        { x: 1 },
        {
          duration: 0.3,
          x: 0.5,
          ease: Power1.easeInOut,
        }
      );
    } else {
      console.log("triggerato else");
      gsap.set(canvasRef2.current, {
        width: "50%",
      });
      gsap.set(camRef.current.scale, {
        x: 1,
      });
    }
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

  if (camRef.current && !isBodypartSelected) {
    /* gsap.set(canvasRef2.current, {
      width: "100%",
    }); */
    gsap.set(camRef.current.scale, {
      x: 1,
    });
    console.log("triggerato if");
  }
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
      </div>
      <Outlet />
    </>
  );
}
