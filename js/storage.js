const Storage = function () {}

Storage.prototype = {
    retrieveItem: function () {
        let caloriesInfo;
        if (localStorage.getItem('caloriesInfo') === null) {
            caloriesInfo = []
        } else {
            caloriesInfo = JSON.parse(localStorage.getItem('caloriesInfo'));
        }

        return caloriesInfo;
    },

    saveItem: function (item) {
        const items = this.retrieveItem();
        items.push(item);
        localStorage.setItem('caloriesInfo', JSON.stringify(items));
    },

    displayItems: function () {
        const items = this.retrieveItem();

        const ui = new UI();

        items.forEach(item => {
            ui.displayCaloriesInfo(item);
        });
    },

    updateItem: function (id, update) { 
        const items = this.retrieveItem();

        // get the number alone
        id = id.slice(5);

        items.forEach(item => {
            if (item.id === id) {
                item.meal = update.updatedMeal;
                item.calories = update.updatedCalories
            }
        })

        //   update local storage
        localStorage.setItem('caloriesInfo', JSON.stringify(items));        
     },

    deleteItems: function (id) {
        const items = this.retrieveItem();

        // get the number alone
        id = id.slice(5);

        items.forEach((item, index) => {
            if (item.id === id) {
                items.splice(index, 1);
            }
        })

        //   update local storage
        localStorage.setItem('caloriesInfo', JSON.stringify(items));
    }
}