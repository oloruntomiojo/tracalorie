// Init Storage
const storage = new Storage();
// storage.displayItems();


const addMeal = document.querySelector('.add-meal-btn');
addMeal.addEventListener('click', () => {
    const meal = document.getElementById('meal').value;
    const calories = document.getElementById('calories').value;

    // Init CaloriesInfo Constructor
    const caloriesInfo = new CaloriesInfo(meal, calories);

    // Init UI constructor
    const ui = new UI(meal, calories);

    if (meal === '' || calories === '') {
        ui.showAlert('error', 'Please fill all fields');
    } else {
        const id = caloriesInfo.id();
        ui.displayCaloriesInfo(id);
        ui.showAlert('', '');
        ui.clearInputFields();
        ui.caloriesCount(calories);
        // storage.saveItem(ui);
    }
});
