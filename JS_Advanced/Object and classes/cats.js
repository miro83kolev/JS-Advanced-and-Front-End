function cats(catsAsString) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let catsArr = [];

  for (let catAsString of catsAsString) {
    let tokens = catAsString.split(" ");
    let cat = new Cat(tokens[0], Number(tokens[1]));
    catsArr.push(cat);
  }

  for (let cat of catsArr) {
    cat.meow();
  }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);