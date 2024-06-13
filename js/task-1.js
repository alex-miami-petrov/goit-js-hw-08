const categoriesList = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const itemCount = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName} (Elements: ${itemCount})`);
});
