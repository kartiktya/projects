function handleFormSubmit(event)
{
    event.preventDefault();
    

    const expenseAmount = event.target.amount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    const obj = {
        expenseAmount : expenseAmount,
        description : description,
        category : category
    }

    localStorage.setItem(category , JSON.stringify(obj));
    

    showExpense(obj);
}
function showExpense(obj)
{
    
    const newLi = document.createElement("li");
    newLi.innerHTML = obj.expenseAmount +" " +obj.description+" "+obj.category; 

    const userList = document.querySelector("ul");
    userList.appendChild(newLi);
    
    // const userList = document.querySelector("ul");
    // userList.innerHTML = userList.innerHTML + `<li> ${userObject.userName}-${userObject.userEmail}-${userObject.userPhone}`;


    //DELETE FUNCTIONALITY
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";

    newLi.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function(event){

        localStorage.removeItem(obj.category);

        const childToDelete = event.target.parentElement;
        userList.removeChild(childToDelete);

    });

    //EDIT FUNCTIONALITY
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";

    newLi.appendChild(editBtn);

    editBtn.addEventListener("click", function(event){

        localStorage.removeItem(obj.category);

        const childToDelete = event.target.parentElement;
        userList.removeChild(childToDelete);

        document.getElementById("expense-amount").value = obj.expenseAmount;
        document.getElementById("description").value = obj.description;
        document.getElementById("category").value = obj.category;

    });
}