document.addEventListener("DOMContentLoaded", function(){
    fetchUsers();
})
let users=[];

// Function to fetch dog breeds from the Dog Api
async function fetchUsers(){
    try{
        const response=await fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME");
    users=await response.json();
    renderUsers();
    }
    catch(error){
        console.log("Error Occured:",error);
    }
    
}

function renderUsers(){
    const userList=document.getElementById("userList");
    userList.innerHTML="";
    users.forEach((user,index)=>{
        const row=document.createElement("tr");
        row.innerHTML=`
        <td>${index + 1}</td>
        <td>${user.id}</td>
        <td>${user.url}</td>
        <td><img style="width:100px; height:50px!" src="`+user.url+`"></td>`
        userList.appendChild(row);
    });
}
