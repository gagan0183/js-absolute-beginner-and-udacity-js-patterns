$(function() {
    var data = {
        lastID: 0,
        pizzas: []
    };

    var octopus = {
        addPizza: function() {
            var lastID = ++data.lastID;
            data.pizzas.push({
                id: lastID,
                visible: true
            });
            view.render();
        },
        removePizza: function(pizza) {
            var getPizza = data.pizzas[pizza - 1];
            getPizza.visible = false;
            view.render();
        },
        getPizzas: function() {
            var visiblePizzas = data.pizzas.filter(function(pizza) {
                return pizza.visible;
            });
            return visiblePizzas;
        },
        init: function() {
            view.init();
        }
    };

    var view = {
        init: function() {
            var addPizza = $('.addPizza');
            
            addPizza.click(function() {
                octopus.addPizza();
            });

            this.pizzaList = $('.pizza-list');
            this.pizzaTemplate = $('script[data-template="pizza"]').html();
            
            this.pizzaList.on('click', function(e) {
                var target = e.currentTarget;
                var ppp = target.getElementsByClassName('pizza')[0].attributes['data-id'].value;
                octopus.removePizza(ppp);
            });
            this.render();
        },
        render: function() {
            var pizzaList = this.pizzaList,
                pizzaTemplate = this.pizzaTemplate;
            
            pizzaList.html('');
            octopus.getPizzas().forEach(function(pizza) {
                thisTemplate = pizzaTemplate.replace(/{{id}}/g, pizza.id);
                pizzaList.append(thisTemplate);
            });
        }
    };

    octopus.init();

}());