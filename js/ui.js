const UI = function () {
    this.meal = document.getElementById('meal');
    this.calories = document.getElementById('calories');
    this.initialCalories = 0;
}

UI.prototype = {
    // Display all data
    displayCaloriesInfo: function () {
        let overview = document.querySelector('.overview');
        const error = document.querySelector('main em');

        if (this.meal.value !== '' && this.calories.value !== '') {
            overview.innerHTML += `
                <li><strong>${this.meal.value}</strong> : <em>${this.calories.value} Calories</em> <a href="#"><i class="fa fa-pencil"></i></a></li>`;

            this.caloriesCount(this.calories.value);

            this.clearInputFields();

            error.classList.remove('show');
        } else {
            error.classList.add('show');
        }
    },

    // Clear form fields
    clearInputFields: function () {
        this.meal.value = '';
        this.calories.value = '';
    },

    // Sum all calories inputed
    caloriesCount: function (calories) {
        this.initialCalories = this.initialCalories + Number(calories);

        let totalCalories = document.querySelector('.total-calories');
        totalCalories.textContent = this.initialCalories;
    }
}
