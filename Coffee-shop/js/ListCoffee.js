function ListCoffee() {
    this.listCf = [];
    this.AddCoffee = function (newCoffee) {
        this.listCf.push(newCoffee)
    }
    this.DeleteCoffee = function (CfId) {
        for (let i = 0; i < this.listCf.length; i++) {
            if (CfId == this.listCf[i].id) {
                this.listCf.splice(i, 1);
            }
        }

    }
    this.EditCoffeeInList = function (coffee) {
        for (let i = 0; i < this.listCf.length; i++) {
            coffeeNeedEdit = this.listCf[i];
            if (coffee.id = coffeeNeedEdit.id) {
                coffeeNeedEdit.name = coffee.name;
                coffeeNeedEdit.image = coffee.image;
                coffeeNeedEdit.title = coffee.title;
                coffeeNeedEdit.rate = coffee.rate;
                coffeeNeedEdit.order = coffee.order;
                coffeeNeedEdit.price = coffee.price;
                coffeeNeedEdit.description = coffee.description;
            }
        }
    }

    this.FindById = function (CfId) {
        for (let i = 0; i < this.listCf.length; i++) {
            if (CfId == this.listCf[i].id) {
                return this.listCf[i]
            }
            return null;
        }
    }

    this.SearchCoffee = function (searchCoffee) {

    }
}