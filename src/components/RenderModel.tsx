import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense } from "react";
import clsx from "clsx";
import { OrbitControls } from "@react-three/drei";
import { PorscheModel } from "../models/PorscheModel";


function ResponsiveModel () {

    const { viewport } = useThree();
    const scaleFactor = Math.min(viewport.width**2 / viewport.height, 1.5);

    return(
        <PorscheModel scale = {[scaleFactor, scaleFactor, scaleFactor]}/>
    )
}

const RenderModel = ({ children, className }) => {

  return (
    <div className="h-screen w-screen">
      <Canvas className={clsx("w-screen h-screen relative", className)}>
        <Suspense fallback={null}>{children}</Suspense>
        <mesh rotation={[0, Math.PI / 4, 0]} position={[0, 0, 0]}>
            <ResponsiveModel />
        </mesh>
        <ambientLight intensity={3.5} />
        <directionalLight position={[0, 10, 0]} intensity={0.5} />
        <pointLight position={[5, 2, 19]} intensity={0.6} />
        <spotLight
          position={[0, 5, 5]}
          angle={0.3}
          penumbra={0.2}
          intensity={1}
          castShadow
        />
        <hemisphereLight
          groundColor={"#54d1ff"}
          intensity={2.5}
        />

        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={1.3}
          enableZoom={false}
          enablePan={false}
           // Restrict vertical rotation (polar angle)
        minPolarAngle={Math.PI / 4}   // 45 degrees
        maxPolarAngle={Math.PI / 2}   // 90 degrees
        />
      </Canvas>
    </div>
  );
};

export default RenderModel;
