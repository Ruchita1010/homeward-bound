import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { LayerMaterial, Depth, Noise } from 'lamina';
import * as THREE from 'three';
import { degreeToRadian } from '../helpers/angleConverter.js';
import PinkForest from './modelComponents/PinkForest.jsx';

const Home = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 10]} />
      <hemisphereLight args={[0xff9000, 0x514493, 1]} position={[0, 0, 1]} />
      <ambientLight intensity={0.4} />
      <OrbitControls
        makeDefault
        maxPolarAngle={degreeToRadian(75)}
        minPolarAngle={degreeToRadian(6)}
        maxAzimuthAngle={degreeToRadian(60)}
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
    </>
  );
};

export default Home;
