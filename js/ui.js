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
                <li id="item-${id}"><strong>${this.meal}</strong> : <em>${this.calories} Calories</em> <a href="#"><i class="fa fa-pencil edit-item"></i></a></li>`;
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

    editItem: function (target) {
        if (target.classList.contains('edit-item')) {
            let mealToEdit = target.parentElement.parentElement.firstElementChild;
            // get the number of calories alone without the text
            const caloriesToEdit = parseInt(mealToEdit.nextElementSibling.textContent);

            mealToEdit = mealToEdit.textContent;

            // display the values in the input fields
            let meal = document.getElementById('meal');
            meal.value = mealToEdit;
            let calories = document.getElementById('calories');
            calories.value = parseInt(caloriesToEdit);

            const formBtns = document.querySelector('.form-btn');
            formBtns.classList.add('show', 'hide');

            let listID = target.parentElement.parentElement.getAttribute('id')

            return listID;
        }
    },

    updateItem: function (id) {
        let meal = document.getElementById('meal').value;
        let calories = document.getElementById('calories').value;

        let listItems = document.querySelector('.overview');
        listItems = [...listItems.children];

        listItems.forEach(item => {
            if(item.getAttribute('id') === id) {
                // update total calories
                let totalCalories = document.querySelector('.total-calories');
                totalCalories.textContent = parseInt(totalCalories.textContent) - parseInt(item.firstElementChild.nextElementSibling.textContent) + parseInt(calories);

                // update  values in list
                item.firstElementChild.textContent = meal;
                item.firstElementChild.nextElementSibling.textContent = `${calories} Calories`;

                this.hideButtons();
                this.clearInputFields();
            }
        })
    },

    deleteItems: function (id) {
        let listItems = document.querySelector('.overview');

        listItems = [...listItems.children];

        listItems.forEach(item => {
            if (item.getAttribute('id') === id) {
                // update total calories
                let totalCalories = document.querySelector('.total-calories');
                totalCalories.textContent = parseInt(totalCalories.textContent) - parseInt(item.firstElementChild.nextElementSibling.textContent);

                // delete meal item;
                item.remove();

                this.clearInputFields();
                this.hideButtons();
            }
        })
    },

    hideButtons: function () {
        const formBtns = document.querySelector('.form-btn');
        formBtns.classList.remove('show', 'hide');
    },

    clearAllMeals: function () {
        let listItems = document.querySelector('.overview');

        listItems = [...listItems.children];

        listItems.forEach(item => {
            item.remove();
        })

        let totalCalories = document.querySelector('.total-calories');

        totalCalories.textContent = '0';
    }

}
