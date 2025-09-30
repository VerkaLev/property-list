import { useState } from 'react';
import { RefContext } from './RefContext';

export const RefContextProvider = ({ children }) => {
  const [ref, setRef] = useState(null);

  return (
    <RefContext.Provider value={{ ref, setRef }}>
      {children}
    </RefContext.Provider>
  );
};
