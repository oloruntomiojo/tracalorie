function randomID() {
    let overview = document.querySelector('.overview');
    let listItems = [...overview.children];
    let id = parseFloat(Math.random() * 100).toFixed(4);
    // check if random id already exists, randomise again if so
    listItems.forEach(item => {
        while (item.classList.contains(id)) {
            id = parseFloat(Math.random() * 100).toFixed(4);
        }
    })
    return id;
}

// Init Storage
const storage = new Storage();
storage.displayItems();

// Add Meal Event
const addMeal = document.querySelector('.add-meal-btn');
addMeal.addEventListener('click', addMealEvent);

let listID;

// Edit Items Event
const listItems = document.querySelector('.overview')
listItems.addEventListener('click', (e) => {
    const ui = new UI();
    listID = ui.editItem(e.target);
})

// Update Items Event
const updateButton = document.querySelector('.update-meal-btn');
updateButton.addEventListener('click', () => {
    const ui = new UI();
    const update = ui.updateItem(listID);
    console.log(update);
    // updateMeal();
    // ui.updateItem(listID);
    storage.updateItem(listID, update);
})

// Delete Items Event
const deleteButton = document.querySelector('.delete-meal-btn');
deleteButton.addEventListener('click', () => {
    const ui = new UI();
    ui.deleteItems(listID);

    storage.deleteItems(listID);
})

// Back Items
const backButton = document.querySelector('.back-btn');
backButton.addEventListener('click', () => {
    const ui = new UI();
        ui.clearInputFields();
        ui.hideButtons();
});

// Clear All Items Event
const clearAll = document.querySelector('.clear-all');
clearAll.addEventListener('click', () => {
    const ui = new UI;
    ui.clearAllMeals();
})

function addMealEvent() {
    const meal = document.getElementById('meal').value;
    const calories = document.getElementById('calories').value;
    let id = randomID();

    // Init CaloriesInfo Constructor
    const info = new CaloriesInfo(meal, calories, id);
    console.log(info);

    // Init UI constructor
    const ui = new UI();

    if (meal === '' || calories === '') {
        ui.showAlert('error', 'Please fill all fields');
    } else {
        ui.displayCaloriesInfo(info);
        ui.showAlert('', '');
        ui.clearInputFields();
        ui.caloriesCount(calories);
        storage.saveItem(info);
    }
}


