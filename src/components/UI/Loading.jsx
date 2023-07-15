import { Html } from '@react-three/drei';

const Loading = () => {
  return (
    <Html position="fixed">
      <div
        style={{
          width: '100vw',
          height: '100vh',
          padding: '10px',
          display: 'grid',
          placeItems: 'center',
          color: '#e1e1e1',
          fontSize: '1.6rem',
        }}>
        You are about to enter the world...
      </div>
    </Html>
  );
};

export default Loading;
