//- создать массив с 20 числами.
// let mass = [1,4,6,8,9,10,345,20,324,5,7,30,65,234,658,40,978,326,5345,200,678,327,46,547,21,2,36,57];

//-- при помощи метода sort и колбека  отсортировать массив.
// let massSort = mass.sort((a,b)=> {
//    return a-b;
// });
// console.log(massSort)

//-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let massSort = mass.sort((a,b )=>{
//    return b-a;
// });
// console.log(massSort)

//-- при помощи filter получить числа кратные 3
// let  filter = mass.filter((value => {
//     return value % 3 ===0;
// }))
// console.log(filter)

//-- при помощи filter получить числа кратные 10
// let filter = mass.filter((value => {
//     return value%10 ===0;
// }))
// console.log(filter)

//-- перебрать (проитерировать) массив при помощи foreach()
// let massIter = mass.forEach((value => {
//     console.log(value)
// }))

//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let massMap = mass.map((value =>{
//     value = value*3;
//     return value;
// }));
// console.log(massMap)

//- создать массив со словами на 15-20 элементов.
//let mass = ['mama','daddy', 'red','green','orange','purple','blue','Anna','Petro','Marina','Rostislav','Oleksandr','Oleksa','parrot','rabbit','piece','justify'];
//-- отсортировать его по алфавиту в восходящем порядке.
// let sort = mass.sort(((a, b) => {
//     if (a>b){
//         return 1;
//     }
//     return -1
// }))
// console.log(sort)

//-- отсортировать его по алфавиту  в нисходящем порядке.
// let sort = mass.sort(((a, b) => {
//     if (a>b){
//         return -1
//     }
//     return 1
// }))
// console.log(sort)

//-- отфильтровать слова длиной менее 4х символов
// let filter = mass.filter(value => value.length < 4);
// console.log(filter)

//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let map = mass.map(value => {
//     value = value +'!';
//     return value
// })
// console.log(map)

// let users = [ {name: 'vasya', age: 31, status: false},
//               {name: 'petya', age: 30, status: true},
//               {name: 'kolya', age: 29, status: true},
//               {name: 'olya', age: 28, status: false},
//               {name: 'max', age: 30, status: true},
//               {name: 'anya', age: 31, status: false},
//               {name: 'oleg', age: 28, status: false},
//               {name: 'andrey', age: 29, status: true},
//               {name: 'masha', age: 30, status: true},
//               {name: 'olya', age: 31, status: false},
//               {name: 'max', age: 31, status: true} ];
//- відсортувати його за  віком (зростання , а потім окремо спадання)
// let sort = users.sort((a, b) =>{
//     return a.age - b.age
// })
// console.log(sort)
// let sort = users.sort((a, b) => {
//     return b.age-a.age;
// })
// console.log(sort)

//- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sort = users.sort((a, b) => {
//     return a.name.length - b.name.length;
// })
// console.log(sort)
// let sort = users.sort((a, b) => {
//     return b.name.length-a.name.length;
// })
// console.log(sort)

//- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let newArr = JSON.parse(JSON.stringify(users));
// newArr = newArr.map((value, index) => {
//     value.id = index;
//     return value;
// })
// console.log(newArr);
//
// console.log(users)

//- відсортувати його за індентифікатором
// let sort  = newArr.sort((a, b) => {
//     return a.id - b.id;
// })
// console.log(sort)
// let sort = newArr.sort((a, b) => {
//     return b.id - a.id;
// })
// console.log(sort)

//==========CALSS=============

// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "s63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:4,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];

//Відфільтрувати масив за наступними крітеріями :

// - двигун більше 3х літрів
// let carsFilter = cars.filter((value, index) => {
//     if (value.volume > 3){
//         return value;
//     }
// });
// console.log(carsFilter)

//- двигун = 2л
// let carsFilter = cars.filter(value => {
//     if (value.volume === 2){
//         return value;
//     }
// });
// console.log(carsFilter)

//- виробник мерс
// let carsFilter = cars.filter(value => {
//     if (value.producer === 'mercedes'){
//         return value
//     }
// })
// console.log(carsFilter)

//- двигун більше 3х літрів + виробник мерседес
// let carsFilter = cars.filter(value => {
//     if (value.volume>3 && value.producer==='mercedes'){
//         return value
//     }
// })
// console.log(carsFilter)

//- двигун більше 3х літрів + виробник субару
// let carsFilter = cars.filter(value => {
//     if (value.volume>3 && value.producer==='subaru'){
//         return value;
//     }
// })
// console.log(carsFilter)

//- сили більше ніж 300
// let carsFilter = cars.filter(value => {
//     if (value.power >300){
//         return value;
//     }
// })
// console.log(carsFilter)

// - сили більше ніж 300 + виробник субару
// let carsFilter = cars.filter(value => {
//     if (value.power >300 && value.producer ==='subaru'){
//         return value;
//     }
// })
// console.log(carsFilter)

// - мотор серіі ej
// let carsFilter = cars.filter(value => {
//     if (value.engine.includes('ej')){
//         return value;
//     }
// })
// console.log(carsFilter)

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let carsFilter = cars.filter(value => {
//     if (value.producer>300 && value.producer==='subaru' && value.engine.includes('ej')){
//     return value;
//     }
// })
// console.log(carsFilter)

// - двигун меньше 3х літрів + виробник мерседес
// let carsFilter = cars.filter(value => {
//     if (value.volume<3 && value.producer==='mercedes'){
//         return value;
//     }
// })
// console.log(carsFilter)

// - двигун більше 2л + сили більше 250
// let carsFilter = cars.filter(value => {
//     if (value.volume>2 && value.power>250){
//         return value;
//     }
// })
// console.log(carsFilter)

//- сили більше 250  + виробник бмв
// let carsFilter = cars.filter(value => {
//     if (value.power>250 && value.producer==='bmw'){
//         return value;
//     }
// })
// console.log(carsFilter)

//- взять слдующий массив
// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

// -- отсортировать его по id пользователей
// let sort = usersWithAddress.sort((a, b) => {
//    if (a.id - b.id){
//        return 1
//    }
//    return -1
// });
// console.log(sort)

// -- отсортировать его по id пользователей в обратном опрядке
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.id - b.id){
//         return -1
//     }
//     return 1
// });
// console.log(sort)

// -- отсортировать его по возрасту пользователей
// let sort = usersWithAddress.sort((a, b) => a.age - b.age)
// console.log(sort)

// -- отсортировать его по возрасту пользователей в обратном порядке
// let sort = usersWithAddress.sort((a, b) => b.age-a.age);
// console.log(sort)

// -- отсортировать его по имени пользователей
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.name < b.name){
//         return -1
//     }
//     return 1
// })
// console.log(sort)

// -- отсортировать его по имени пользователей в обратном порядке
// let sort = usersWithAddress.sort((a, b) => {
//     if (b.name < a.name){
//         return -1
//     }
//     return 1
// })
// console.log(sort)

// -- отсортировать его по названию улицы  в алфавитном порядке
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.address.street < b.address.street){
//         return -1
//     }
//     return 1
// })
// console.log(sort)

// -- отсортировать его по номеру дома по возрастанию
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.address.number < b.address.number){
//         return -1
//     }
//     return 1
// })
// console.log(sort)

// -- отфильтровать (оставить) тех кто младше 30
// let sort = usersWithAddress.filter(value => {
//     if (value.age < 30){
//         return value
//     }
// })
// console.log(sort)

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let filter = usersWithAddress.filter(value => {
//     if (value.status === true){
//         return value
//     }
// })
// console.log(filter)

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let filter = usersWithAddress.filter(value => {
//     if (value.status === false && value.age<30){
//         return value
//     }
// })
// console.log(filter)

// -- отфильтровать (оставить) тех у кого номер дома четный
// let filter = usersWithAddress.filter(value => {
//     return value.address.number % 2 === 0;
// })
// console.log(filter)

//Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

let index = Math.max(arr.indexOf(4,5))
console.log(index)
// let filter = arr.filter((value, index) => {
//     if (value===4){
//         return value;
//     }
// })
// console.log(filter)
