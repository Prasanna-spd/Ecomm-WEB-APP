import React, { createContext, useContext, useReducer, useState } from "react";

const CategoryContext = createContext();
const cartStateContext = createContext();
const cartDispatchContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          size: action.size,
          price: action.price,
        },
      ];

    default:
      console.log("Error to reducer");
  }
};

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const updateSelectedCategory = (category) => {
    setSelectedCategory(category);
  };
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CategoryContext.Provider
      value={{ selectedCategory, updateSelectedCategory }}
    >
      <cartStateContext.Provider value={state}>
        <cartDispatchContext.Provider value={dispatch}>
          {children}
        </cartDispatchContext.Provider>
      </cartStateContext.Provider>
    </CategoryContext.Provider>
  );
};

export default CategoryContext;

export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = () => useContext(cartDispatchContext);
