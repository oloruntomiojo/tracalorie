// Init Storage
const storage = new Storage();
console.log(storage.retrieveItem());

const addMeal = document.querySelector('.add-meal-btn');
addMeal.addEventListener('click', () => {
    const meal = document.getElementById('meal').value;
    const calories = document.getElementById('calories').value;

    // Init UI constructor
    const ui = new UI(meal, calories);

    if (meal === '' || calories === '') {
        ui.showAlert('error', 'Please fill all fields');
    } else {
        ui.displayCaloriesInfo();
        ui.showAlert('', '');
        storage.saveItem(ui);
    }

});
