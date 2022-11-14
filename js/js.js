console.warn('Task 1');
let arr2 = [1, 2, 4, 5, 7, 8]
for (let i of arr2){// создаю цикл для выведения в коноль 
  console.log(i);
}
console.log('...');
arr2 = arr2.reverse()
for (let i of arr2){// создаю цикл для выведения в коноль 
  console.log(i);
}

console.warn('Task 2,3');
let arr = [
  {
    name: 'Milk',
    price: 3.25
  },
  {
    name: 'Coffee',
    price: 1.5
  },
  {
    name: 'Ice Cream',
    price: 7.85
  },
  {
    name: 'Tomatos',
    price: 4.14
  },
  {
    name: 'Onion',
    price: 2.25,
  }
]
for (let i in arr){
  arr[i].price = arr[i].price*2;// Прайс в *2 раза
}
arr[4].fresh = false;// Добавил ключ
console.log(arr);