let numbers = [100,200,300,400,500];

// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])
// console.log(numbers[3])
// console.log(numbers[4])
// console.log(numbers[5])

// if(numbers[0] === 300){
//     console.log("number exists")
// } else if (numbers[1] === 300){
//     console.log("number exists")
// } else if (numbers[2] === 300){
//     console.log("number exists")
// }
// else if (numbers[3] === 300){
//     console.log("number exists")
// }
// else if (numbers[4] === 300){
//     console.log("number exists")
// } else {
//     console.log("number doesn't exist")
// }

let present = false;

// for(let i = 0; i <numbers.length;i++){
//     if(numbers[i] === 600){
//         present = true;
//     }
// }

// if(present){
//     console.log("Number present");
// } else{
//     console.log("Number doesn't present");
// }

for(let number of numbers){
    if(number === 300){
        present = true;
    }
}

if(present){
    console.log("Number present");
} else{
    console.log("Number doesn't present");
}

let product = {
    productName: "samsung",
    productType: "Electronics",
    price: 20000,
    isAvailable: true
};

for(let key in product){
    console.log(key, product[key])
}

console.log(product.productName);

numbers.push(600);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.unshift(100);
console.log(numbers);


let user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    names: ["v", "d", "s", "f"]
}

console.log(user.address.geo.lat)
console.log(user.names[0])

let a = [1,2,3]
let b = [...a,4,5]
console.log(b)

let arr1 = [10,20,30]
let arr2 = [40,50,60]

arr2 = [...arr1, ...arr2];
console.log(arr2);

let c = [...arr2]

let obj1 = {
    name: "vignesh"
}

let obj2 = {
    role: "admin"
}


let result = {...obj1, ...obj2};

console.log(result)

let finalResult = {...result, exp: 4};
console.log(finalResult);

finalResult["exp"] = 6;
console.log(finalResult);

function addoperation(a,b){
    console.log("The function called", a/b);
}

addoperation(100,500)

const add = (a, b) => {
    console.log("Recent operation called", a+b);
}

add(500,600)

let names = ["deva", "abdul", "subhash"];

const res= names.filter((e) => e === "abdul");
console.log(res);

let userDetails = [{
    id: 1,
    name: "Leanne Graham",
    age: 25
},
{
    id: 2,
    name: "Abdul",
    age: 29
},
{
    id: 3,
    name: "Deva",
    age: 31
},
{
    id: 4,
    name: "subash",
    age: 18
}]

let resultJson = userDetails.filter((e) => e.age > 18);
console.log("the result json is", resultJson);

let sortedName = userDetails.filter((e) => e.age > 18).map((e) => e.name);
console.log(sortedName);

const loadh1Tag = () => {
    const name = "vignesh"
    const data = document.getElementById("h1sample");
    const tag = document.createElement("h1");
    tag.textContent = `Welcome to JS testing ${name}`;
    data.append(tag);
}


const loadUlData = () => {
    const option1 = "Home";
    const dataa = document.getElementById("h1sample");
    // const ulData = document.createElement("ul");
    // const list = document.createElement("li");
    // list.textContent = "option1";
    // const list1 = document.createElement("li");
    // list1.textContent = "option2";
    // const list2 = document.createElement("li");
    // list2.textContent = "option3";
    // ulData.append(list);
    // ulData.append(list1);
    // ulData.append(list2);
    // dataa.append(ulData);

    dataa.innerHTML = `<ul>
    <li>${option1}</li>
    <li>option2</li>
    <li>option3</li>
    </ul>    
    `


}

const loadTableData = () => {
    const dataa = document.getElementById("h1sample");
    const tab = document.createElement("table");
    const th = document.createElement("thead");
    const h1s = document.createElement("th")
    h1s.textContent = "s.no"
       const h2s = document.createElement("th")
    h2s.textContent = "Name"
    const td = document.createElement("tbody")
    const d1s = document.createElement("td");
    d1s.textContent = 1
    const d2s = document.createElement("td");
    d2s.textContent = "vignesh"
    td.append(d1s);
    td.append(d2s);
    th.append(h1s);
    th.append(h2s);
    tab.append(th)
    tab.append(td)
    dataa.append(tab);


}
