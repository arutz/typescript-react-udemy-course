class Salad {}

namespace Salad {
  export const availableDressings = ['olive oil', 'yoghurt'];
}

console.log(Salad.availableDressings.includes('olive oil'));
