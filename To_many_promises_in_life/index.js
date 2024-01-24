const user = [];

function createPost()
{
    setTimeout(()=>{

    user.push({name : "Sumit" , lastActivityTime : new Date()});
    //console.log(user[0].lastActivityTime);

    const timeToUpdate = user[0].lastActivityTime;
    console.log(`Before Creating post 1, user lastActivityTime = ${timeToUpdate}`);
    user[0].lastActivityTime = new Date().getTime();


    },2000)

    

}

function updateLastActivityTime()
{

    setTimeout(()=>{

    console.log("After Creating post1 >>>>>>");
    console.log(user);
    console.log(`User last activity time ${user[0].lastActivityTime}`);

    },1000)

    
    
}

createPost();

updateLastActivityTime();