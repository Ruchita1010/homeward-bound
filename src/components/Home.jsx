import { Environment, OrbitControls } from '@react-three/drei';
import { LayerMaterial, Depth, Noise } from 'lamina';
import * as THREE from 'three';
import { degreeToRadian } from '../helpers/angleConverter.js';
import PinkForest from './modelComponents/PinkForest.jsx';
import Player from './Player.jsx';

const Home = () => {
  return (
    <>
      <hemisphereLight args={[0xff9000, 0x514493, 1]} position={[0, 0, 1]} />
      <ambientLight intensity={0.4} />
      <OrbitControls
        makeDefault
        maxPolarAngle={degreeToRadian(75)}
        minPolarAngle={degreeToRadian(6)}
        maxAzimuthAngle={degreeToRadian(20)}
        enableZoom={false}
      />
      <Environment background resolution={64}>
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <LayerMaterial side={THREE.BackSide}>
            <Depth
              colorA="#ff9000"
              colorB="#514493"
              mode="normal"
              near={0}
              far={300}
              origin={[100, 100, 100]}
            />
            <Noise mapping="local" type="cell" scale={0.5} mode="softlight" />
          </LayerMaterial>
        </mesh>
      </Environment>

      <PinkForest />
      <PinkForest position={[0, 0, -10]} />
      <PinkForest position={[10, 0, 0]} />
      <PinkForest position={[-10, 0, 0]} />
      <Player boundary={{ x1: 7, x2: 10, z1: 1, z2: 8 }} />
    </>
  );
};

export default Home;
