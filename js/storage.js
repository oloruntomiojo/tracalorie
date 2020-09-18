const Storage = function () {}

Storage.prototype = {
    retrieveItem: function () { 
        let caloriesInfo;
        if(localStorage.getItem('caloriesInfo') === null) {
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
      }
}