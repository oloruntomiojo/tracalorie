const UI = function (meal, calories) {
    this.meal = meal;
    this.calories = calories;
    this.id = parseFloat(Math.random() * 100).toFixed(4);
}

UI.prototype = {
    // Display all data
    displayCaloriesInfo: function (meal, calories, id) {
        let overview = document.querySelector('.overview');
        let listItems = [...overview.children];      

        // check if random id already exists, randomise again if so
        listItems.forEach(item => {
            while(item.classList.contains(this.id)) {
                this.id = parseFloat(Math.random() * 100).toFixed(4);
            }
        })
        // append calories information
            overview.innerHTML += `
                <li class="item-${this.id}"><strong>${this.meal}</strong> : <em>${this.calories} Calories</em> <a href="#"><i class="fa fa-pencil"></i></a></li>`;

            this.caloriesCount(this.calories);

            this.clearInputFields();
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
