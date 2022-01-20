enum Vegetables {
  Tomato = 'tomato',
  Onion = 'onion'
}

namespace Vegetables {
  export function makeSalad() {
    return `${Vegetables.Tomato} ${Vegetables.Onion} salad`;
  }
}

const salad = Vegetables.makeSalad();
console.log(salad);