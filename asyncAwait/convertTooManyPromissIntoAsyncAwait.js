const user = [];

const post = async () => {

    const createPost = new Promise((resolve,reject)=>{

        setTimeout(()=>{

            user.push({name : "Sumit" , lastActivityTime : new Date()});
            //console.log(user[0].lastActivityTime);
           resolve("createdPost");
            },2000)
            
    })

    const updateLastActivityTime = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("updatedUserLastActivityTime");
        
           },1000)
            
    })

    const createdPost = await createPost;
    
    const timeToUpdate = user[0].lastActivityTime;
    console.log(`Before Creating post 1, user lastActivityTime = ${timeToUpdate}`);
    user[0].lastActivityTime = new Date().getTime();


    const updatedUserLastActivityTime = await updateLastActivityTime;

    console.log("After Creating post1 >>>>>>");
            console.log(user);
            console.log(`User last activity time ${user[0].lastActivityTime}`);

    return "done";
}

//post().then((m)=>console.log(m));
post();