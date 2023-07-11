import { useState, useEffect } from 'react';

export const useGuidingMessage = (message = '') => {
  const [guidingMessage, setGuidingMessage] = useState(message);
  const [showGuidingMessage, setShowGuidingMessage] = useState(false);

  useEffect(() => {
    let timeout;
    if (guidingMessage !== '') {
      setShowGuidingMessage(true);

      timeout = setTimeout(() => {
        setShowGuidingMessage(false);
        setGuidingMessage('');
      }, 4000);
    }

    return () => clearTimeout(timeout);
  }, [guidingMessage]);

  return [guidingMessage, setGuidingMessage, showGuidingMessage];
};
