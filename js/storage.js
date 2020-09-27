const Storage = function () {}

Storage.prototype = {
    retrieveItem: function () {
        let caloriesInfo;
        let totalCalories;

        if (localStorage.getItem('caloriesInfo') === null) {
            caloriesInfo = [];
            totalCalories = 0;
        } else {
            caloriesInfo = JSON.parse(localStorage.getItem('caloriesInfo'));
            totalCalories = localStorage.getItem('totalCalories');
        }

        return {
            caloriesInfo, 
            totalCalories
        };
    },

    saveItem: function (item) {
        const items = this.retrieveItem().caloriesInfo;
        const totalCalories = document.querySelector('.total-calories').textContent;
        
        items.push(item);

        // save to local storage
        localStorage.setItem('caloriesInfo', JSON.stringify(items));
        localStorage.setItem('totalCalories', totalCalories);
    },

    displayItems: function () {
        // get array items and totalCalories from LS
        const items = this.retrieveItem().caloriesInfo;
        const totalCalories = this.retrieveItem().totalCalories;
        
        const ui = new UI();

        // display data from LS on UI
        items.forEach(item => {
            ui.displayCaloriesInfo(item);
        });

        document.querySelector('.total-calories').textContent = totalCalories;
    },

    updateItem: function (id, update) { 
        // get array items from LS
        const items = this.retrieveItem().caloriesInfo;
        
        // get totalCalories from UI
        const totalCalories = document.querySelector('.total-calories').textContent;

        // get the number alone
        id = id.slice(5);

        items.forEach(item => {
            if (item.id === id) {
                item.meal = update.updatedMeal;
                item.calories = update.updatedCalories;
            }
        })

        //   update LS
        localStorage.setItem('caloriesInfo', JSON.stringify(items));        
        localStorage.setItem('totalCalories', totalCalories);
     },

    deleteItems: function (id) {
        const items = this.retrieveItem().caloriesInfo;
        const totalCalories = document.querySelector('.total-calories').textContent;

        // get the number alone
        id = id.slice(5);

        items.forEach((item, index) => {
            if (item.id === id) {
                items.splice(index, 1);
            }
        })

        //   update local storage
        localStorage.setItem('caloriesInfo', JSON.stringify(items));
        localStorage.setItem('totalCalories', totalCalories);
    },

    clearAllItems: function () { 
        // Set LS keys to initial values
        localStorage.setItem('caloriesInfo', JSON.stringify([]));
        localStorage.setItem('totalCalories', 0);
     }
}