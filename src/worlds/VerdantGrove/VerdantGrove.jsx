import { useEffect, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import { degreeToRadian } from '../../helpers/angleConverter';
import TreeHouses from './ModelComponents/TreeHouses';
import FlowerField from './FlowerField';
import Player from '../../components/Player';
import GuidingMessage from '../../components/UI/GuidingMessage';
import { useGuidingMessage } from '../../hooks/useGuidingMessage';
import grassTexture from './textures/GrassTexture.png';

const VerdantGrove = () => {
  const [lightOnFlowerField, setLightOnFlowerField] = useState(false);
  const [guidingMessage, setGuidingMessage, showGuidingMessage] =
    useGuidingMessage();

  // on the component(world) mount show this message so players aren't confused what to do
  useEffect(() => {
    setGuidingMessage('Click on the flowers to touch them');
  }, []);

  const onAlphaFlowerClick = (message) => {
    setLightOnFlowerField(true);
    setGuidingMessage(message);
  };

  const Plain = ({ position }) => {
    const texture = new TextureLoader().load(grassTexture);
    return (
      <>
        {lightOnFlowerField && (
          <rectAreaLight position={[-30, 0, -2]} args={['red', 2, 55, 50]} />
        )}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={position} scale={2.4}>
          <planeBufferGeometry args={[10.2, 10, 50, 50]} />
          <meshStandardMaterial map={texture} />
        </mesh>
      </>
    );
  };

  return (
    <>
      {lightOnFlowerField && (
        <hemisphereLight args={[0x514493, 0xff9000, 1]} position={[0, 0, 1]} />
      )}
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
      <FlowerField onAlphaFlowerClick={onAlphaFlowerClick} />
      <Player boundary={{ x1: 20, x2: 20, z1: 16, z2: 20 }} />
      {showGuidingMessage && <GuidingMessage message={guidingMessage} />}
    </>
  );
};

export default VerdantGrove;
