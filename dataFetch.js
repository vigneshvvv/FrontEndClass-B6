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

let data;

function fethDataNew(){
    const result = fetch("https://dummyjson.com/users")
    .then((e) => e.json())
    .then((d) => {
        data = d.users;
        const row = d.users.map(user => 
            `<tr>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            <td><button type='button" class="btn btn-primary" onclick="editData(${user.id})">Edit</button>
            <button type="button" class="btn btn-primary">Delete</button></td>
            </tr>`
        ).join("");

        document.getElementById("tableBody").innerHTML = row;
    });

    console.log(result);
}


let  currentUser = 0
function editData(event){
    console.log(event);
    const filtered = data.find((e) => e.id === event);
    console.log(filtered);
    currentUser = filtered.id;
    document.getElementById("firstName").value = filtered.firstName;
    document.getElementById("lastName").value = filtered.lastName;
    document.getElementById("email").value = filtered.email;
    document.getElementById("editDialogue").showModal();
}
function saveUser(){
    const updatedUser = {
        id: currentUser,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value
    }
    console.log(updatedUser);

    fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedUser)
    }).then(response => response.json()).then(data => console.log(data))
    document.getElementById("editDialogue").close();
}

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
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
