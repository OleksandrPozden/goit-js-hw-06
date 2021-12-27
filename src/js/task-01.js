const categoriesRef = document.querySelector("ul#categories");
const numberCategories = categoriesRef.children.length;
console.log("Number of categories: ",numberCategories);

const categoriesListRef = categoriesRef.querySelectorAll(".item");
categoriesListRef.forEach(category =>{
    const headerRef = category.querySelector("h2");
    console.log("Category: ", headerRef.textContent);
    const elementsRef = category.querySelector("ul");
    console.log("Elements: ",elementsRef.children.length);
})