import { useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Cavern } from './ModelComponents/Cavern';
import { Shard } from './ModelComponents/Shard';
import Player from '../../components/Player';
import { useUUID } from '../../hooks/useUUID';
import { useHover } from '../../hooks/useHover';

const Gemsoria = () => {
  const initialShardsState = [
    { position: [-65, -13, -53], rotation: [0, 0, Math.PI] },
    { position: [0, -18, -147], rotation: [Math.PI, 0, 0] },
    { position: [0, -32, 25], rotation: [0, 0, Math.PI] },
    { position: [58, 7, -121], rotation: [0, Math.PI, 0] },
    { position: [-70, -2.4, -140], rotation: [0, 0, Math.PI] },
  ];
  const [shards, setShards] = useState(initialShardsState);
  const shardKeys = useUUID(shards.length);
  const [handlePointerOver, handlePointerOut] = useHover('grab', 'auto');

  const handleShardClick = (foundShardIndex) => {
    const updatedShards = shards.map((shard, shardIndex) =>
      shardIndex === foundShardIndex ? { ...shard, found: true } : shard
    );
    setShards(updatedShards);
    // set the hovered state back to 'false'
    handlePointerOut();
  };

  return (
    <>
      <ambientLight intensity={0.2} />
      {/* default distance is infinity so restricting zoom out */}
      <OrbitControls makeDefault maxDistance={12} />
      <Cavern position={[0, -10, -100]} rotation={[0, Math.PI, 0]} />
      <Player boundary={{ x1: 80, x2: 80, z1: 100, z2: 180 }} />
      {shards.map(
        ({ position, rotation, found }, index) =>
          !found && (
            <Shard
              key={shardKeys[index]}
              position={position}
              rotation={rotation}
              onClick={() => handleShardClick(index)}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            />
          )
      )}
    </>
  );
};

export default Gemsoria;
