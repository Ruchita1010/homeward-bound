import { useEffect, useState } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import { LayerMaterial, Depth, Noise } from 'lamina';
import * as THREE from 'three';
import { degreeToRadian } from '../../utils/angleConverter.js';
import PinkForest from './ModelComponents/PinkForest.jsx';
import Blackhole from '../../components/modelComponents/Blackhole.jsx';
import Player from '../../components/Player.jsx';

const Home = ({ setRarePortalOccurence }) => {
  const [showRarePortal, setShowRarePortal] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRarePortal(true);
      setRarePortalOccurence(true);
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
      <PinkForest position={[10, 0, 2]} />
      <PinkForest position={[-10, 0, 2]} />
      <PinkForest position={[10, 0, -10]} />
      <PinkForest position={[-10, 0, -10]} />
      <Player boundary={{ x1: 7, x2: 10, z1: 1, z2: 8 }} />
      {showRarePortal && (
        <Blackhole position={[0, 1, 0]} rotation={[0, 0, 0]} scale={5} />
      )}
    </>
  );
};

export default Home;
