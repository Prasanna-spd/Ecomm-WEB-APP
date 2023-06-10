import React, { createContext, useState } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const updateSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <CategoryContext.Provider
      value={{ selectedCategory, updateSelectedCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
