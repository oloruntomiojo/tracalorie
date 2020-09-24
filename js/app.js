// Init Storage
const storage = new Storage();
// storage.displayItems();

// Add Meal Event
const addMeal = document.querySelector('.add-meal-btn');
addMeal.addEventListener('click', addMealEvent);

let id;

// Edit Items Event
const listItems = document.querySelector('.overview')
listItems.addEventListener('click', (e) => {
    const ui = new UI();
    id = ui.editItem(e.target);
})

// Update Items Event
const updateButton = document.querySelector('.update-meal-btn');
updateButton.addEventListener('click', () => {
    const ui = new UI();
    ui.updateItem(id);
})

// Delete Items Event
const deleteButton = document.querySelector('.delete-meal-btn');
deleteButton.addEventListener('click', () => {
    const ui = new UI();
    ui.deleteItems(id);
})

// Back Items
const backButton = document.querySelector('.back-btn');
backButton.addEventListener('click', () => {
    const ui = new UI();
    ui.clearInputFields();
    ui.hideButtons();
})

// Clear All Items Event
const clearAll = document.querySelector('.clear-all');
clearAll.addEventListener('click', () => {
    const ui = new UI;
    ui.clearAllMeals();
})

function addMealEvent() {
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
}
