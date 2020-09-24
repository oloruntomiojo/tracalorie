const UI = function (meal, calories) {
    this.meal = meal;
    this.calories = calories;
}

UI.prototype = {
    // Display all data
    displayCaloriesInfo: function (id) {
        let overview = document.querySelector('.overview');

        // append calories information
        overview.innerHTML += `
                <li class="item-${id}"><strong>${this.meal}</strong> : <em>${this.calories} Calories</em> <a href="#"><i class="fa fa-pencil edit-item"></i></a></li>`;
    },

    // Clear form fields
    clearInputFields: function () {
        let meal = document.getElementById('meal').value = '',
            calories = document.getElementById('calories').value = '';
    },

    // Sum all calories inputed
    caloriesCount: function (calories) {
        let totalCalories = document.querySelector('.total-calories');
        let initialCalories = parseInt(totalCalories.textContent);
        initialCalories += parseInt(calories);

        totalCalories.textContent = initialCalories;
    },

    showAlert: function (className, message) {
        const errorAlert = document.querySelector('.alert');
        errorAlert.className = `alert ${className}`;
        errorAlert.textContent = message;
    },

    editItem: function (item) {
        let mealToEdit = item.parentElement.parentElement.firstElementChild;
        // get the number of calories alone without the text
        const caloriesToEdit = mealToEdit.nextElementSibling.textContent.split(" ", 1)[0];

        mealToEdit = mealToEdit.textContent;

        // display the values in the input fields
        const meal = document.getElementById('meal');
        meal.value = mealToEdit;
        const calories = document.getElementById('calories');
        calories.value = parseInt(caloriesToEdit);

        // Create Update Button
        const updateButton = document.createElement('button');
        updateButton.className = 'update-meal-btn';

        const updateIcon = document.createElement('i');
        updateIcon.className = 'fa fa-pencil-square-o';

        updateButton.append(updateIcon);
        updateButton.append(document.createTextNode(' UPDATE MEAL'));

        // Create Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-meal-btn'

        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa fa-times';

        deleteButton.append(deleteIcon);
        deleteButton.append(document.createTextNode(' DELETE MEAL'));

        // Create Back Button
        const backButton = document.createElement('button');
        backButton.className = 'back-btn btn-right';

        const backIcon = document.createElement('i');
        backIcon.className = 'fa fa-chevron-circle-left';

        backButton.append(backIcon);
        backButton.append(document.createTextNode(' BACK'));

        // hide the add meal button
        const addMeal = document.querySelector('.add-meal-btn');
        addMeal.style.display = 'none';

        // append all buttons to form
        const formButtons = document.querySelector('.form-btn');
        formButtons.append(updateButton);
        formButtons.append(deleteButton);
        formButtons.append(backButton);

        return item.parentElement.parentElement.className;
    },

    updateItem: function (id) {
        let listItems = document.querySelector('.overview');

        listItems = [...listItems.children];

        listItems.forEach(item => {
            if (item.className.match(id)) {
                // get update values in input fields
                const meal = document.getElementById('meal').value;
                const calories = document.getElementById('calories').value;

                // update total calories
                let totalCalories = document.querySelector('.total-calories');
                totalCalories.textContent = parseInt(totalCalories.textContent) - parseInt(item.firstElementChild.nextElementSibling.textContent) + parseInt(calories);

                // update item in list
                item.firstElementChild.textContent = meal;
                item.firstElementChild.nextElementSibling.textContent = `${calories} Calories`;
            }
        })

        this.clearInputFields();
        this.hideButtons();
    },

    deleteItems: function (id) {
        let listItems = document.querySelector('.overview');

        listItems = [...listItems.children];

        listItems.forEach(item => {
            if (item.className.match(id)) {
                // update total calories
                let totalCalories = document.querySelector('.total-calories');
                totalCalories.textContent = parseInt(totalCalories.textContent) - parseInt(item.firstElementChild.nextElementSibling.textContent);
                // delete meal
                item.remove();
            }
        })

        this.clearInputFields();
        this.hideButtons();

    },

    hideButtons: function () {
        const buttons = document.querySelectorAll('.form-btn button');

        buttons.forEach(button => {
            if (!button.classList.contains('add-meal-btn')) {
                button.remove();
            }
        })

        const addButton = document.querySelector('.add-meal-btn');
        addButton.style.display = 'block';
    },

}
