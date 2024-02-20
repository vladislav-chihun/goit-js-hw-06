class storage  {
    #items
    constructor(items) {
        this.#items = items
    }
    get Items() {
        return this.#items
    }

    set Item(newItem) {
        this.#items.push(newItem)
    }
    set Item(itemToRemove) {
        this.#items = this.#items.slice(indexOf(itemToRemove))
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]