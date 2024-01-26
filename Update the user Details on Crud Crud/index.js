window.addEventListener("DOMContentLoaded", () => {

    axios.get("https://crudcrud.com/api/a304dec12a694870878d81472c313da4/appointmentData")
         .then((response) => {
            for(let i=0; i<response.data.length; i++){
                showUserOnScreen(response.data[i]);
            }

         })
         .catch((error) => console.log(error))

} )

function handleFormSubmit(event)
{
    event.preventDefault();
    
    const userName = event.target.username.value;
    const userEmail = event.target.email.value;
    const userPhone = event.target.phone.value;
    
    let userObject = {

        name : userName,
        email : userEmail,
        phonenumber : userPhone,
    };

         
    axios.post("https://crudcrud.com/api/a304dec12a694870878d81472c313da4/appointmentData", userObject)
         .then((response)=>{
            showUserOnScreen(response.data);
         })
         .catch((error)=>console.log("ERROR"))
 


      //localStorage.setItem(userEmail, JSON.stringify(userObject));
     
}

function showUserOnScreen(userObject)
{ 
    //creating new li element COORECT
     const newLi = document.createElement("li");
     newLi.innerHTML = userObject.name + " - " + userObject.email + " - " + userObject.phonenumber ;
     newLi.setAttribute("id",userObject._id);
    
     const uoList = document.querySelector("ul");

    uoList.appendChild(newLi);

  
    //creating delete button CORRECT
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    newLi.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function(){
        var id = userObject._id;
        
        axios.delete(`https://crudcrud.com/api/a304dec12a694870878d81472c313da4/appointmentData/${id}`)
             .then((response)=>{
                uoList.removeChild(newLi);;
             })
             .catch((error)=>console.log("ERROR"))

       //sss localStorage.removeItem(userObject.email);
    });


  
    //creating edit button
    const editButton = document.createElement("input");
    editButton.type="button";
    editButton.value = "Edit";

    newLi.appendChild(editButton);

    editButton.onclick = () => {

        //Window.localStorage.removeItem(userObject.email);
        uoList.removeChild(newLi);
     
       document.getElementById("username").value=userObject.name;
       document.getElementById("email").value=userObject.email;
       document.getElementById("phone").value=userObject.phonenumber;   
  
    } 
}