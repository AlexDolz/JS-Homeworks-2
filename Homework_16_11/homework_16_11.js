// ************************ 1 Task ************************
// 1) Создать пронумерованные списки с товарами (на основе массива с объектами);

// const cars = [
//   {
//     title: 'BMW',
//     price: '40000',
//     count: '15',
//   },

//   {
//     title: 'Toyota',
//     price: '20000',
//     count: '13',
//   },

//   {
//     title: 'Ford',
//     price: '30000',
//     count: '20',
//   },

//   {
//     title: 'Chevrolet',
//     price: '60000',
//     count: '9',
//   },

//   {
//     title: 'Volkswagen',
//     price: '30000',
//     count: '13',
//   },
// ];

// const body = document.querySelector('body');
// const container = document.createElement('div');
// container.setAttribute('id', 'container');
// body.append(container);

// for (let i = 0; i < cars.length; i++) {
//   const orderedList = document.createElement('ol');
//   const title = document.createElement('li');
//   const price = document.createElement('li');
//   const count = document.createElement('li');

//   orderedList.classList.add('ordered_list');

//   title.innerText = `Title: ${cars[i].title}`;
//   price.innerText = `Price: ${cars[i].price} $`;
//   count.innerText = `Count: ${cars[i].count}`;

//   orderedList.append(title, price, count);
//   container.append(orderedList);
// }
//   body.append(container);

// *********************** Task 2 **************************
// 2) Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами с прошлой задачи), а внизу выводится итоговая сумма товаров и их количество.

// const cars = [
//   {
//     title: 'BMW',
//     price: '40000',
//     count: '15',
//   },

//   {
//     title: 'Toyota',
//     price: '20000',
//     count: '13',
//   },

//   {
//     title: 'Ford',
//     price: '30000',
//     count: '20',
//   },

//   {
//     title: 'Chevrolet',
//     price: '60000',
//     count: '9',
//   },

//   {
//     title: 'Volkswagen',
//     price: '30000',
//     count: '13',
//   },
// ];

// const body = document.querySelector('body');
// const container = document.createElement('div');
// container.setAttribute('id', 'container');
// body.append(container);

// let sumPrice = 0;
// let sumCount = 0;

// for (let i = 0; i < cars.length; i++) {
//   cars[i].price = parseInt(cars[i].price);
//   cars[i].count = parseInt(cars[i].count);
//   sumPrice += cars[i].price;
//   sumCount += cars[i].count;
// }

// const priceSum = document.createElement('p');
// const countSum = document.createElement('p');

// priceSum.classList.add('price-sum');
// countSum.classList.add('count-sum');

// priceSum.innerText = `The total sum of cars is: ${sumPrice} $`;
// countSum.innerText = `The total amount of cars is: ${sumCount}`;

// cars.forEach(({ title, price, count }) => {
//   const orderedList = document.createElement('ul');
//   const carTitle = document.createElement('li');
//   const carPrice = document.createElement('li');
//   const carCount = document.createElement('li');

//   orderedList.classList.add('ordered_list');

//   carTitle.innerText = `Title: ${title}`;
//   carPrice.innerText = `Price: ${price} $`;
//   carCount.innerText = `Count: ${count}`;

//   orderedList.append(carTitle, carPrice, carCount);
//   container.append(orderedList);
// });
//   body.append(container, priceSum, countSum);

// ************************** Task 3 *************************
// 3)Напишите скрипт, который выводит в интерфейс следующую таблицу:

const people = [
  {
    No: 1,
    'Full Name': 'Bill Gates',
    Position: 'Founder Microsoft',
    Salary: '$1000',
  },
  {
    No: 2,
    'Full Name': 'Steve Jobs',
    Position: 'Founder Apple',
    Salary: '$1200',
  },
  {
    No: 3,
    'Full Name': 'Larry Page',
    Position: 'Founder Google',
    Salary: '$1100',
  },
  {
    No: 4,
    'Full Name': 'Mark Zuckeberg',
    Position: 'Founder Facebook',
    Salary: '$1300',
  },
];

const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.append(container);

const table = document.createElement('table');
table.classList.add('table');
container.append(table);

const firstRow = document.createElement('tr');
const tableNo = document.createElement('td');
const tableName = document.createElement('td');
const tablePosition = document.createElement('td');
const tableSalary = document.createElement('td');

firstRow.classList.add('first_row');

tableNo.innerText = 'No.';
tableName.innerText = 'Full Name';
tablePosition.innerText = 'Position';
tableSalary.innerText = 'Salary';
table.append(firstRow);
firstRow.append(tableNo, tableName, tablePosition, tableSalary);

for (let i = 0; i < people.length; i++) {
  const tableData1 = document.createElement('td');
  const tableData2 = document.createElement('td');
  const tableData3 = document.createElement('td');
  const tableData4 = document.createElement('td');
  const tableRow1 = document.createElement('tr');

  tableRow1.classList.add('table-row');

  tableData1.innerText = `${people[i].No}`;
  tableData2.innerText = `${people[i]['Full Name']}`;
  tableData3.innerText = `${people[i].Position}`;
  tableData4.innerText = `${people[i].Salary}`;
  table.append(tableRow1);
  tableRow1.append(tableData1, tableData2, tableData3, tableData4);
}
