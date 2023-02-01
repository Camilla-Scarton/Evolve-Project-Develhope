import React, { Suspense, useRef } from 'react';
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { BodyModel } from "./BodyModel";
import * as THREE from "three"

export default function FirstCanvas() {

    const lightRef = useRef()

    console.log(lightRef);

    return <div className='min-h-[500px] w-full h-full'>
        <Suspense fallback={null}>
            <Canvas shadows style={{ height: "550px" }} className='min-h-[500px] w-full h-full bg-white dark:bg-slate-900 justify-center items-center'>
                <spotLight ref={lightRef} angle={0.339292006587698} args={["#Fffee7", 0.2, -30]} position={[-45, 60, 70]} penumbra={1} castShadow />
                <spotLight angle={0.339292006587698} args={["#Fffee7", 0.2, -30]} position={[-45, 60, -70]} penumbra={1} castShadow />
                <spotLight angle={0.339292006587698} args={["#DDF0FF", 0.2, -30]} position={[45, 60, 70]} penumbra={1} castShadow />
                <spotLight angle={0.339292006587698} args={["#DDF0FF", 0.2, -30]} position={[45, 60, -70]} penumbra={1} castShadow />
                <ambientLight args={["#ffffff", 0.1]} />
                <PerspectiveCamera position={[-1.2, 2.5, 7]} makeDefault />
                <OrbitControls useRef={lightRef} maxDistance={10} minDistance={1} maxPolarAngle={1.9} />
                <BodyModel position={[0, -3.5, 0]} rotation={[0, 3, 0]} castShadow scale={1.5} />
                <mesh rotation={[-1.58, 0, 0]} position={[0, -3.54, 0]} receiveShadow>
                    <circleGeometry args={[70, 70]} />
                    <meshStandardMaterial color="#0000ff" />
                </mesh>
            </Canvas>
        </Suspense>
    </div>
}