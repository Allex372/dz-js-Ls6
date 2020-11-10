//- создать массив с 20 числами.
//let mass = [1,4,6,8,9,10,345,20,324,5,7,30,65,234,658,40,978,326,5345,200,678,327,46,547,21,2,36,57];

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
//     if (value%3){
//         return value;
//     }
//     console.log(value)
// }))

//-- при помощи filter получить числа кратные 10
// let filter = mass.filter((value => {
//     if (value % 10){
//         return value;
//     }
//     console.log(value)
// }))

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

let users = [ {name: 'vasya', age: 31, status: false},
              {name: 'petya', age: 30, status: true},
              {name: 'kolya', age: 29, status: true},
              {name: 'olya', age: 28, status: false},
              {name: 'max', age: 30, status: true},
              {name: 'anya', age: 31, status: false},
              {name: 'oleg', age: 28, status: false},
              {name: 'andrey', age: 29, status: true},
              {name: 'masha', age: 30, status: true},
              {name: 'olya', age: 31, status: false},
              {name: 'max', age: 31, status: true} ];
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
let newArr = JSON.parse(JSON.stringify(users));
newArr = newArr.map((value, index) => {
    value.id = index;
    return value;
})
console.log(newArr);

console.log(users)


//- відсортувати його за індентифікатором
// let sort  = newArr.sort((a, b) => {
//     return a.id - b.id;
// })
// console.log(sort)
// let sort = newArr.sort((a, b) => {
//     return b.id - a.id;
// })
// console.log(sort)

