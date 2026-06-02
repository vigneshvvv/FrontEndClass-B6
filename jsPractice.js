let numbers = [100,200,300,400,500];

console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])
console.log(numbers[5])

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



