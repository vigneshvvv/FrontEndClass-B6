async function fetchData(){
    let data = await fetch("https://dummyjson.com/users");
    console.log(data)
    let ouput = await data.json()
    let resultN = await ouput.users;
    console.log(resultN);

    console.log(data.users)

    const result = fetch("https://dummyjson.com/users")
    .then((e) => e.json()).then((data) => console.log(data))
}

function fethDataNew(){
    const result = fetch("https://dummyjson.com/users")
    .then((e) => e.json())
    // .then((output) => output.users)
    .then((d) => {
        const row = d.users.map(user => 
            `<tr>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            <td><button type="button" class="btn btn-primary">Edit</button><button type="button" class="btn btn-primary">Delete</button></td>
            </tr>`
        ).join("");

        document.getElementById("tableBody").innerHTML = row;
    });

    console.log(result);
}

// GET -> value fetch
// POST ->  insert opearation
// PUT -> edit 
// delete -> record delete 

// PATCH -> entire record

// 200 - ok
// 401 - unAuthorized
// 403 - forbidden
// 404 - not found
// 500 - Internal Server Error
// 400 - input validation