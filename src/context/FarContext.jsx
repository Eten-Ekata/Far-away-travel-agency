import { createContext, useState } from "react";
const JonasContext = createContext()

export const JonasProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  return (
    <JonasContext.Provider
      value={{
        items,
        setItems
      }}
    >
      {children}
    </JonasContext.Provider>
  );
}

export default JonasContext