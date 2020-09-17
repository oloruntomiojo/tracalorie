// Init UI constructor
const ui = new UI();

const addMeal = document.querySelector('.add-meal-btn');
addMeal.addEventListener('click', () => {
    ui.displayCaloriesInfo();
});
