const user = [];

function createPost()
{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            user.push({name : "Sumit" , lastActivityTime : new Date()});
            //console.log(user[0].lastActivityTime);
        
            const timeToUpdate = user[0].lastActivityTime;
            console.log(`Before Creating post 1, user lastActivityTime = ${timeToUpdate}`);
            user[0].lastActivityTime = new Date().getTime();

            resolve();
        
        
            },2000)

    })
}


function updateLastActivityTime()
{
   // return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            console.log("After Creating post1 >>>>>>");
            console.log(user);
            console.log(`User last activity time ${user[0].lastActivityTime}`);

            //resolve();
        
           },1000)
        
   // })    
   

}



createPost().then(updateLastActivityTime);

//updateLastActivityTime();