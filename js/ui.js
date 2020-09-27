const UI = function () {
    this.mealInput = document.getElementById('meal');
    this.caloriesInput = document.getElementById('calories');
    this.listItems = document.querySelector('.overview');
    this.totalCalories = document.querySelector('.total-calories');
}

UI.prototype = {
    // Display all data
    displayCaloriesInfo: function (caloriesInfo) {
        // append calories information
        this.listItems.innerHTML += `
                <li id="item-${caloriesInfo.id}"><strong>${caloriesInfo.meal}</strong> : <em>${Number(caloriesInfo.calories)} Calories</em> <a href="#"><i class="fa fa-pencil edit-item"></i></a></li>`;
    },

    // Sum all calories inputed
    caloriesCount: function (calories) {
        let initialCalories = parseInt(this.totalCalories.textContent);
        initialCalories += parseInt(calories);

        this.totalCalories.textContent = initialCalories;
    },

    editItem: function (target) {
        if (target.classList.contains('edit-item')) {
            let mealToEdit = target.parentElement.parentElement.firstElementChild;
            // get the number of calories alone without the text
            const caloriesToEdit = parseInt(mealToEdit.nextElementSibling.textContent);

            mealToEdit = mealToEdit.textContent;

            // display the values in the input fields
            this.mealInput.value = mealToEdit;
            this.caloriesInput.value = parseInt(caloriesToEdit);

            const formBtns = document.querySelector('.form-btn');
            formBtns.classList.add('show', 'hide');

            let listID = target.parentElement.parentElement.getAttribute('id')

            return listID;
        }
    },

    updateItem: function (id) {
        let meal = this.mealInput.value;
        let calories = this.caloriesInput.value;

        this.listItems = [...this.listItems.children];

        this.listItems.forEach(item => {
            if (item.getAttribute('id') === id) {
                // check if fields are empty
                if (meal !== '' && calories !== '') {
                    // update total calories
                    this.totalCalories.textContent = parseInt(this.totalCalories.textContent) - parseInt(item.firstElementChild.nextElementSibling.textContent) + parseInt(calories);

                    // update  values in list
                    item.firstElementChild.textContent = meal;

                    item.firstElementChild.nextElementSibling.textContent = `${calories} Calories`;

                    this.hideButtons();
                    this.clearInputFields();
                } else {
                    this.showAlert('error', 'Please fill all fields');
                }
            }
        })
        return {
            updatedMeal: meal,
            updatedCalories: calories
        }
    },

    deleteItems: function (id) {
        this.listItems = [...this.listItems.children];

        this.listItems.forEach(item => {
            if (item.getAttribute('id') === id) {
                if (this.mealInput.value !== '' && this.caloriesInput.value !== '') {
                    // update total calories
                    this.totalCalories.textContent = parseInt(this.totalCalories.textContent) - parseInt(item.firstElementChild.nextElementSibling.textContent);

                    // delete meal item;
                    item.remove();

                    this.clearInputFields();
                    this.hideButtons();
                } else {
                    this.showAlert('error', 'Cannot delete Empty field(s)');
                }
            }
        })
    },

    // Clear form fields
    clearInputFields: function () {
        this.mealInput.value = '',
        this.caloriesInput.value = '';
    },

    clearAllMeals: function () {
        this.listItems.innerHTML = "";
        this.totalCalories.textContent = "0";
    },

    hideButtons: function () {
        const formBtns = document.querySelector('.form-btn');
        formBtns.classList.remove('show', 'hide');
    },

    showAlert: function (className, message) {
        const errorAlert = document.querySelector('.alert');
        errorAlert.className = `alert ${className}`;
        errorAlert.textContent = message;

        setTimeout(() => {
            this.removeError(className)
        }, 2000);
    },

    removeError: function (className) {
        const alertMessage = document.querySelector('.alert');
        alertMessage.textContent = "";
        alertMessage.classList.remove(className);
    },
}