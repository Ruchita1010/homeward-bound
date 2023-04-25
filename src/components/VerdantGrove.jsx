import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import { degreeToRadian } from '../helpers/angleConverter';
import TreeHouses from './modelComponents/TreeHouses';
import FlowerField from './FlowerField';
import Player from './Player';
import grassTexture from '/GrassTexture.png';

function Plain({ position }) {
  const texture = new TextureLoader().load(grassTexture);
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={position} scale={2.4}>
        <planeBufferGeometry args={[10.2, 10, 50, 50]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
}

const VerdantGrove = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <OrbitControls
        makeDefault
        minPolarAngle={degreeToRadian(40)}
        maxPolarAngle={degreeToRadian(60)}
        minAzimuthAngle={degreeToRadian(40)}
        enableZoom={false}
      />

      <TreeHouses position={[13.5, 0, 11.5]} />
      <TreeHouses position={[-11, 0, 11.5]} />
      <TreeHouses position={[13.5, 0, -12.5]} />
      <Plain position={[-12, 0, -14]} />
      <FlowerField />
      <Player boundary={{ x1: 20, x2: 20, z1: 16, z2: 20 }} />
    </>
  );
};

export default VerdantGrove;
