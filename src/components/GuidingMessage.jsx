import { Html } from '@react-three/drei';

const GuidingMessage = ({ message }) => {
  return (
    <Html position="fixed">
      <div
        style={{
          position: 'absolute',
          top: '32rem',
          width: '100vw',
          padding: '10px',
          display: 'grid',
          placeItems: 'center',
          color: '#e1e1e1',
          backgroundColor: '#12121280',
          fontSize: '1.2rem',
          lineHeight: '1.6rem',
        }}>
        {message}
      </div>
    </Html>
  );
};

export default GuidingMessage;
