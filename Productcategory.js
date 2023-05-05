//import React from "react";
import "./style.css";
import Category from "./CategoryApi";
import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
//import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Category.map((curElem) => {
      return curElem.category;
    })
  ),
  
];

console.log(uniqueList);

// const Productcategory = () => {
//   const [menuData, setMenuData] = useState(Menu);
//   const [menuList, setMenuList] = useState(uniqueList);

//   const filterItem = (category) => {
//     if (category === "All") {
//       setMenuData(Menu);
//       return;
//     }

//     const updatedList = Menu.filter((curElem) => {
//       return curElem.category === category;
//     });

//     setMenuData(updatedList);
//   };

//   return (
//     <>
//       <Navbar filterItem={filterItem} menuList={menuList} />
//       <MenuCard menuData={menuData} />
//     </>
//   );
// };

const Productcategory =() => {
const [CategoryData, setCategoryData] = useState(Category);

const filterItem =(category) => {
const updatedList = Category.filter((curElem) => {

    return curElem.category === category;
});
setCategoryData(updatedList);
};
return (
<>
<nav className="navbar">
    <div className="btn-group">
        <button className="btn-group__item" onClick={() => filterItem("Flowers")} >Flowers </button>
        <button className="btn-group__item" onClick={() => filterItem("Vegetables")} >Vegetables </button>
        <button className="btn-group__item" onClick={() => filterItem("Fruits")}>Fruits </button>
        <button className="btn-group__item" onClick={() => filterItem("Plants")}>Plants </button>
        <button className="btn-group__item" onClick={() => filterItem("Seeds")}>Seeds </button>
        <button className="btn-group__item" onClick={() => setCategoryData(Category)}>All</button>
    </div>
</nav>
<CategoryCard  CategoryData={CategoryData} />

</>
);
};
export default Productcategory;