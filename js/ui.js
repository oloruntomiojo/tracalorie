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
                <li class="item-${id}"><strong>${this.meal}</strong> : <em>${this.calories} Calories</em> <a href="#"><i class="fa fa-pencil"></i></a></li>`;
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
     }
}
