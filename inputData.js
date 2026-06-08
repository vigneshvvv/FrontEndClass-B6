function inputOperation(){
    const value = document.getElementById("userName").value
    console.log(value);
}

const users = [
    {
        "userName": "vignesh",
        "password": "vignesh"
    }
]

function submitOperation(e){
    e.preventDefault();
    console.log(event)

    const form =  new FormData(e.target)
    console.log(form)
    const data = Object.fromEntries(form.entries())
    console.log(data)
    isLoggedIn = false
    // for(let user of users){
    //     if(user.userName === data.userName && user.password === data.password){
    //         isLoggedIn = true
    //     }
    // }

    // if(isLoggedIn){
    //     console.log("Logged in")
    // } else {
    //     console.log("Not logged in")
    // }

    let output = users.find((e) => e.userName === data.userName && e.password === data.password)
    if(output === undefined){
        console.log("NotLogged in")
    } else {
        console.log("logged in ")
    }
    
   
}
