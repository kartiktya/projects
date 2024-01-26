if( Object.keys(localStorage)!=0)
{
  const keys = Object.keys(localStorage);

  for(let i=0; i<keys.length; i++) {
        
    const data = JSON.parse(localStorage.getItem(keys[i]));
    
    let userObject = {

    name : data.name,
    email : data.email,
    phonenumber : data.phonenumber
  };

  showUserOnScreen(userObject);

  }

}
  

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

    var response1;
    axios.post("https://crudcrud.com/api/e9d42f3e265140a2a68bb753fdba3315/appointmentData", userObject)
         .then((response)=>{
            response1 = response;
            showUserOnScreen(response.data);
         })
         .catch((error)=>console.log("ERROR"))

    
      localStorage.setItem(userEmail, JSON.stringify(userObject));
     
}

function showUserOnScreen(userObject)
{
    //creating new li element COORECT
     const newLi = document.createElement("li");
     newLi.innerHTML = userObject.name + " - " + userObject.email + " - " + userObject.phonenumber ;
    
     const uoList = document.querySelector("ul");

    uoList.appendChild(newLi);

  
    //creating delete button CORRECT
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    newLi.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function(){

        uoList.removeChild(newLi);

        localStorage.removeItem(userObject.email);
    });


  
    //creating edit button
    const editButton = document.createElement("input");
    editButton.type="button";
    editButton.value = "Edit";

    newLi.appendChild(editButton);

    editButton.onclick = () => {
        Window.localStorage.removeItem(userObject.email);
        uoList.removeChild(newLi);
     
       document.getElementById("username").value=userObject.name;
       document.getElementById("email").value=userObject.email;
       document.getElementById("phone").value=userObject.phonenumber;   
  
    } 
}