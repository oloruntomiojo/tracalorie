// Global Variables
const addMeal = document.querySelector('.add-meal-btn');
const updateButton = document.querySelector('.update-meal-btn');
const deleteButton = document.querySelector('.delete-meal-btn');
const backButton = document.querySelector('.back-btn');
const clearAllBtn = document.querySelector('.clear-all');
const totalCalories = document.querySelector('.total-calories').textContent;
const listItems = document.querySelector('.overview');

let listID;

// Init Storage
const storage = new Storage();
storage.displayItems();

(function AllEvents() {
    // Add Meal Event
    addMeal.addEventListener('click', addMealEvent);

    // Edit Items Event
    listItems.addEventListener('click', (e) => {
        editMealEvent(e);
    })

    // Update Meal Event
    updateButton.addEventListener('click', updateMealEvent);

    // Delete Meal Event
    deleteButton.addEventListener('click', deleteMealEvent);

    // Go Back Event
    backButton.addEventListener('click', goBackEvent);

    // Clear All Items Event
    clearAllBtn.addEventListener('click', ClearAllEvent);
})()

function addMealEvent() {
    const meal = document.getElementById('meal').value;
    const calories = document.getElementById('calories').value;
    let id = randomID();

    // Init CaloriesInfo Constructor
    const info = new CaloriesInfo(id, meal, calories, totalCalories);

    // Init UI constructor
    const ui = new UI();

    if (meal === '' || calories === '') {
        ui.showAlert('error', 'Please fill all fields');
    } else {
        ui.displayCaloriesInfo(info);
        ui.clearInputFields();
        ui.caloriesCount(calories);
        storage.saveItem(info);
    }
}

function editMealEvent(e) {
    const ui = new UI();
    listID = ui.editItem(e.target);
}

function updateMealEvent() {
    const ui = new UI();
    // update UI
    const update = ui.updateItem(listID);

    // update LS
    storage.updateItem(listID, update);
}

function deleteMealEvent() {
    const ui = new UI();
    ui.deleteItems(listID);

    // delete from LS
    storage.deleteItems(listID);
}

function goBackEvent() {
    const ui = new UI();
    ui.clearInputFields();
    ui.hideButtons();
}

function ClearAllEvent() {
    const ui = new UI;
    ui.clearAllMeals();

    // Clear data from LS
    storage.clearAllItems();
}

// generate random number
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
