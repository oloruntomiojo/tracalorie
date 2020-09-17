const UI = function () { 
    this.meal = document.getElementById('meal');
    this.calories = document.getElementById('calories');
}

UI.prototype = {
    displayCaloriesInfo: function () { 
        let overview = document.querySelector('.overview');

        overview.innerHTML += `
                <li><strong>${this.meal.value}</strong> : <em>${this.calories.value} Calories</em> <a href="#"><i class="fa fa-pencil"></i></a></li>`;

        this.clearInputFields();
        // this.alertt();
     },

     clearInputFields: function () { 
        this.meal.value = '';
        this.calories.value = '';
      },
}
