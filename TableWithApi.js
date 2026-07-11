fetch("navBar.html").then((response) => response.text())
.then((data) => document.getElementById("navBar").innerHTML = data);

async function getTableData(){

    let data = await fetch("https://dummyjson.com/users");
    let output = await data.json()
    let result = await output.users
    console.log(result)

    result.forEach(element => {
        let table = document.getElementById("tdata");
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${element.id}</td>
         <td>${element.firstName}</td>
          <td>${element.lastName}</td>
           <td>${element.email}</td>
           <td>
            <button type="button" class="btn btn-primary" onclick='openPopup(${JSON.stringify(element)})'>Edit</button>
            <button type="button" class="btn btn-primary">Delete</button>
           </td>
        `
       table.append(tr); 
    });
}

function openPopup(user){
    document.getElementById("firstName").value = user.firstName;
    document.getElementById("lastName").value  = user.lastName;
    document.getElementById("email").value = user.email;

    let popup = new bootstrap.Modal(document.getElementById("popUpModel"));
    popup.show();
}

document.getElementById("submit").addEventListener("submit", 
    function(event){
        event.preventDefault();
        let formData = new FormData(event.target);
        let data  = Object.fromEntries(formData.entries());
        console.log(data);
        // callPostMethod(data);
    }

)

function callPostMethod(data){
    try{
    fetch("https://jsonplaceholder.typicode.com/pos", {
        method: "POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(data)

    }
        ).then((respose) => console.log(response))
        throw new Error("error while posting data");
    }catch(error){
        console.log("error while posting data in api call");
         window.location.href = "ErrorOccured.html"
        console.log(error);
    }
}

getTableData()
