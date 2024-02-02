const listCategories = document.querySelectorAll(".item");
console.log(listCategories.length);



listCategories.forEach((category) => {
    let itemsTitle = category.querySelector('h2');
    console.log(itemsTitle.textContent);
    let itemsNumber = category.querySelectorAll('li');
    console.log(itemsNumber.length);
})