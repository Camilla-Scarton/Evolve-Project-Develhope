import React, { Suspense } from 'react';
import  {Canvas} from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Plane } from '@react-three/drei';
import {BodyModel} from "./BodyModel";
import * as THREE from "three"

export default function FirstCanvas() {
const plane = new THREE.MeshPhysicalMaterial();


plane.color = {
    r: 0,
    g: 0,
    b: 1.38,
}
plane.metalness = 1.5
    return <div className='min-h-[500px] w-full h-full'>
        <Suspense fallback={null}>
        <Canvas shadows style={{height: "550px"}} className='min-h-[500px] w-full h-full bg-white dark:bg-slate-900 justify-center items-center'>
            <directionalLight intensity={0.3} color="#fdd" position={[-0.5, 0, 2]} />
            <directionalLight intensity={0.3} color="#dcf" position={[0.5, 1, 2]} castShadow/>
            <directionalLight intensity={0.3} color="#fdd" position={[-0.5, 0, -2]} />
            <directionalLight intensity={0.3} color="#dcf" position={[0.5, 1, -2]} />
            <PerspectiveCamera position={[-1.2, 2.5, 7]} makeDefault/>
                <OrbitControls maxDistance={10} minDistance={1} maxPolarAngle={1.9}/>
                <BodyModel position={[0, -3.5, 0]} rotation={[0,3,0]} castShadow scale={1.5}/>
                <Plane radius={5} blur={1} material={plane} opacity={0.5} position={[0, -3.54, 0]} args={[1000,1000]} rotation={[-1.58,0,0]} receiveShadow>
                </Plane>
        </Canvas>
            </Suspense>
    </div>
}