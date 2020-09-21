const CaloriesInfo = function (meal, calories) {
    this.meal = meal;
    this.calories = calories;
    this.id = function () {
        let overview = document.querySelector('.overview');
        let listItems = [...overview.children];
        let id = parseFloat(Math.random() * 100).toFixed(4);
        // check if random id already exists, randomise again if so
        listItems.forEach(item => {
            while (item.classList.contains(id)) {
                id = parseFloat(Math.random() * 100).toFixed(4);
            }
        })
        return id;
    };
}

