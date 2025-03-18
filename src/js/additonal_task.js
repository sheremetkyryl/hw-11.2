const cart = {
    items: [
        {
            name: '🍎',
            price: 50,
        },
        {
            name: '🍇', 
            price: 70,
        },
        {
            name: '🍋', 
            price: 60,
        },
        {
            name: '🍓', 
            price: 110,
        },
    ],
    getItems() {
        return this.items
    }, //повертає список товарів

    add(product) {
        this.items.push(product);
    }, // додає товар

    remove(productName) {
        this.items = this.items.filter(item => item.name !== productName);
    },// видаляє товар

    clear() {
        this.items = [1]
    }, //очищає корзину

    countTotalPrice() {
        return this.items.reduce((total, item) => total + item.price, 0);
      }, //рахує загальну вартість
  };





console.log(cart.getItems());
console.log(cart.countTotalPrice());

cart.remove("🍇");
console.log(cart.getItems());

cart.clear();
console.log(cart.getItems());