import React from "react";
import { useGLTF } from "@react-three/drei";

export function PorscheModel(props) {
  const { nodes, materials } = useGLTF(
    "/public/911-model/scene-transformed.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.window_rear_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.015, -0.009, 0.063]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.578}
      />
      <mesh
        geometry={nodes.windshield_1.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.015, -0.005, 0.065]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.578}
      />
      <mesh
        geometry={nodes.Plane002_0.geometry}
        material={materials.paint}
        position={[-0.624, -0.082, -1.968]}
        rotation={[-3.01, -0.62, 0.775]}
        scale={0.014}
      />
      <mesh
        geometry={nodes.Cylinder000_0.geometry}
        material={materials.PaletteMaterial003}
        position={[-0.015, 0.008, 0.063]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.578}
      />
      <mesh
        geometry={nodes.Cylinder000_2.geometry}
        material={materials.rubber}
        position={[-0.015, 0.008, 0.063]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.578}
      />
      <mesh
        geometry={nodes.Plane_0.geometry}
        material={materials.Material}
        position={[-0.015, -0.619, 0.063]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.022, 5.66, 4.336]}
      />
      <mesh
        geometry={nodes.bumper_front004_1.geometry}
        material={materials.PaletteMaterial004}
        position={[-0.015, -0.009, 0.063]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.578}
      />
      <mesh
        geometry={nodes.bumper_front007_0.geometry}
        material={materials.PaletteMaterial005}
        position={[-0.015, -0.009, 0.063]}
        rotation={[-1.577, 0, 0]}
        scale={0.599}
      />
      <mesh
        geometry={nodes.bumper_front009_0.geometry}
        material={materials.tex_shiny}
        position={[-0.015, -0.009, 0.063]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.578}
      />
      <mesh
        geometry={nodes.boot007_0.geometry}
        material={materials.logo}
        position={[-0.015, -0.009, 0.063]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.578}
      />
      <mesh
        geometry={nodes.Plane005_0.geometry}
        material={materials.license}
        position={[-0.015, -0.178, -2.08]}
        rotation={[-1.457, 0, 0]}
        scale={[0.228, 0.228, 0.206]}
      />
      <mesh
        geometry={nodes.boot011_0.geometry}
        material={materials.PaletteMaterial006}
        position={[-0.015, -0.009, 0.063]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.578}
      />
    </group>
  );
}

useGLTF.preload("/public/911-model/scene-transformed.glb");
