// Init Storage
const storage = new Storage();
// storage.displayItems();


const addMeal = document.querySelector('.add-meal-btn');
addMeal.addEventListener('click', () => {
    addMealEvent()


    const editItem = document.querySelectorAll('.edit-item');
    editItem.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('edit-item')) {
                // Init UI constructor
                const ui = new UI();

                const id = ui.editItem(e.target);

                const updateButton = document.querySelector('.update-meal-btn');
                updateButton.addEventListener('click', () => {
                    ui.hideButtons();
                    ui.updateItem(id);
                })
                
                const deleteButton = document.querySelector('.delete-meal-btn');
                deleteButton.addEventListener('click', () => {
                    ui.hideButtons();
                    ui.deleteItems(id);
                })

            }


        })
    })
});

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
