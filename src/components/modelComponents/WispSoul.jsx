/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/WispSoul.glb -T
Author: SeytanTuyux (https://sketchfab.com/SeytanTuyux)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/wisp-soul-f4fc937e7e1f4afeb59e2b0ac1c41855
Title: Wisp soul
*/

import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const WispSoul = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/WispSoul.glb');
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions.Animation.play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Wisp_34" position={[0, -0.42, 0]}>
                <mesh
                  name="Object_65"
                  geometry={nodes.Object_65.geometry}
                  material={materials.NEON}
                />
                <mesh
                  name="Object_66"
                  geometry={nodes.Object_66.geometry}
                  material={materials.NEGRO}
                />
              </group>
              <group name="Dot_0" position={[1.2, 1.48, -0.63]} scale={0.02}>
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials.NEON}
                />
              </group>
              <group name="Dot001_1" position={[0.2, 1.65, -0.97]} scale={0.02}>
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot002_2"
                position={[1.07, 1.25, -0.96]}
                scale={0.02}>
                <mesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot003_3"
                position={[0.31, 2.61, -0.98]}
                scale={0.02}>
                <mesh
                  name="Object_10"
                  geometry={nodes.Object_10.geometry}
                  material={materials.NEON}
                />
              </group>
              <group name="Dot004_4" position={[0.72, 2.32, 0.2]} scale={0.02}>
                <mesh
                  name="Object_12"
                  geometry={nodes.Object_12.geometry}
                  material={materials.NEON}
                />
              </group>
              <group name="Dot005_5" position={[1.3, 1.78, 0.67]} scale={0.02}>
                <mesh
                  name="Object_14"
                  geometry={nodes.Object_14.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot006_6"
                position={[-0.08, 0.84, -1.03]}
                scale={0.02}>
                <mesh
                  name="Object_16"
                  geometry={nodes.Object_16.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot007_7"
                position={[0.28, 1.53, -0.23]}
                scale={0.02}>
                <mesh
                  name="Object_18"
                  geometry={nodes.Object_18.geometry}
                  material={materials.NEON}
                />
              </group>
              <group name="Dot008_8" position={[0.32, 1.6, -0.39]} scale={0.02}>
                <mesh
                  name="Object_20"
                  geometry={nodes.Object_20.geometry}
                  material={materials.NEON}
                />
              </group>
              <group name="Dot009_9" position={[1.5, 1.42, -0.13]} scale={0.02}>
                <mesh
                  name="Object_22"
                  geometry={nodes.Object_22.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot010_10"
                position={[1.6, 1.54, -0.22]}
                scale={0.02}>
                <mesh
                  name="Object_24"
                  geometry={nodes.Object_24.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot011_11"
                position={[-0.16, 2.36, -0.33]}
                scale={0.02}>
                <mesh
                  name="Object_26"
                  geometry={nodes.Object_26.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot012_12"
                position={[1.09, 0.91, 0.88]}
                scale={0.02}>
                <mesh
                  name="Object_28"
                  geometry={nodes.Object_28.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot013_13"
                position={[-1.91, 1.86, -0.34]}
                scale={0.02}>
                <mesh
                  name="Object_30"
                  geometry={nodes.Object_30.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot014_14"
                position={[1.64, 0.87, 0.69]}
                scale={0.02}>
                <mesh
                  name="Object_32"
                  geometry={nodes.Object_32.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot015_15"
                position={[-1.03, 1.95, 0.6]}
                scale={0.02}>
                <mesh
                  name="Object_34"
                  geometry={nodes.Object_34.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot016_16"
                position={[-1.26, 2.12, 0.29]}
                scale={0.02}>
                <mesh
                  name="Object_36"
                  geometry={nodes.Object_36.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot017_17"
                position={[0.56, 1.32, -0.83]}
                scale={0.02}>
                <mesh
                  name="Object_38"
                  geometry={nodes.Object_38.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot018_18"
                position={[0.15, 1.25, -0.05]}
                scale={0.02}>
                <mesh
                  name="Object_40"
                  geometry={nodes.Object_40.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot019_19"
                position={[-0.74, 1.19, 1.01]}
                scale={0.02}>
                <mesh
                  name="Object_42"
                  geometry={nodes.Object_42.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot020_20"
                position={[0.4, 2.09, -0.31]}
                scale={0.02}>
                <mesh
                  name="Object_44"
                  geometry={nodes.Object_44.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot021_21"
                position={[-1.1, 1.39, -0.35]}
                scale={0.02}>
                <mesh
                  name="Object_46"
                  geometry={nodes.Object_46.geometry}
                  material={materials.NEON}
                />
              </group>
              <group name="Dot022_22" position={[0.5, 1.53, 1]} scale={0.02}>
                <mesh
                  name="Object_48"
                  geometry={nodes.Object_48.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot023_23"
                position={[1.35, 1.26, -0.02]}
                scale={0.02}>
                <mesh
                  name="Object_50"
                  geometry={nodes.Object_50.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot024_24"
                position={[0.39, 2.11, 0.92]}
                scale={0.02}>
                <mesh
                  name="Object_52"
                  geometry={nodes.Object_52.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot025_25"
                position={[-2.01, 1.7, -0.77]}
                scale={0.02}>
                <mesh
                  name="Object_54"
                  geometry={nodes.Object_54.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot026_26"
                position={[-1.63, 1.43, -0.84]}
                scale={0.02}>
                <mesh
                  name="Object_56"
                  geometry={nodes.Object_56.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot027_28"
                position={[1.09, 0.91, 0.88]}
                scale={0.02}>
                <mesh
                  name="Object_59"
                  geometry={nodes.Object_59.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot028_29"
                position={[1.09, 0.91, 0.88]}
                scale={0.02}>
                <mesh
                  name="Object_61"
                  geometry={nodes.Object_61.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="Dot029_30"
                position={[1.09, 0.91, 0.88]}
                scale={0.02}>
                <mesh
                  name="Object_63"
                  geometry={nodes.Object_63.geometry}
                  material={materials.NEON}
                />
              </group>
              <group
                name="PASTO_35"
                position={[-1.26, -1.32, 0.36]}
                rotation={[0, -1.24, 0]}
                scale={[0.06, 0.24, 0.01]}>
                <mesh
                  name="Object_68"
                  geometry={nodes.Object_68.geometry}
                  material={materials.NEON_FUCCIA}
                />
              </group>
              <group
                name="PASTO001_36"
                position={[-1.11, -1.32, 0.79]}
                rotation={[0, -0.98, 0]}
                scale={[0.06, 0.24, 0.01]}>
                <mesh
                  name="Object_70"
                  geometry={nodes.Object_70.geometry}
                  material={materials.NEON_FUCCIA}
                />
              </group>
              <group
                name="PASTO002_37"
                position={[-0.78, -1.32, 1.02]}
                rotation={[0, -0.88, 0]}
                scale={[0.06, 0.24, 0.01]}>
                <mesh
                  name="Object_72"
                  geometry={nodes.Object_72.geometry}
                  material={materials.NEON_FUCCIA}
                />
              </group>
              <group
                name="PASTO003_38"
                position={[-0.32, -1.32, 1.15]}
                rotation={[0, -0.38, 0]}
                scale={[0.06, 0.24, 0.01]}>
                <mesh
                  name="Object_74"
                  geometry={nodes.Object_74.geometry}
                  material={materials.NEON_FUCCIA}
                />
              </group>
              <group
                name="PASTO004_39"
                position={[0.22, -1.32, 1.14]}
                rotation={[0, 0.18, 0]}
                scale={[0.06, 0.24, 0.01]}>
                <mesh
                  name="Object_76"
                  geometry={nodes.Object_76.geometry}
                  material={materials.NEON_FUCCIA}
                />
              </group>
              <group
                name="PASTO005_40"
                position={[0.69, -1.32, 1.01]}
                rotation={[0, 0.6, 0]}
                scale={[0.06, 0.24, 0.01]}>
                <mesh
                  name="Object_78"
                  geometry={nodes.Object_78.geometry}
                  material={materials.NEON_FUCCIA}
                />
              </group>
              <group
                name="PASTO006_41"
                position={[1.07, -1.32, 0.62]}
                rotation={[0, 0.99, 0]}
                scale={[0.06, 0.24, 0.01]}>
                <mesh
                  name="Object_80"
                  geometry={nodes.Object_80.geometry}
                  material={materials.NEON_FUCCIA}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/WispSoul.glb');
export default WispSoul;
