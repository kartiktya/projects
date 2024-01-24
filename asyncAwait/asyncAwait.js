console.log("Person1: shows Ticket");
console.log("Person2: shows Ticket");


const preMovie = async() =>{

    const wifeBringingTickets = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("Tickets")
        },3000)

    })

    const getPopcorn = new Promise((resolve,reject)=>{

            resolve("Popcorn")

    })

    const getButter = new Promise((resolve,reject)=>{

        resolve("Butter")

    })

    const getColdDrinks = new Promise((resolve,reject)=>{

        resolve("ColdDrinks")

    })



    let ticket = await wifeBringingTickets;

    console.log(`Wife: I have the ${ticket}`);
    console.log("Husband: We should go in");
    console.log("Wife: No I am hungry");

    let popcorn = await getPopcorn;

    console.log(`Husband: I got some ${popcorn}`);
    console.log("Husband: We should go in");
    console.log("Wife: No I need butter on my popcorn");

    let butter = await getButter;

    console.log(`Husband: I got some ${butter} on popcorn`);
    console.log("Husband: anything else darling?");
    console.log("Wife: Let's go we are getting late");
    console.log("Husband: Thank you for the reminder *grins*");

    let coldDrinks = await getColdDrinks;

    return ticket;
}

preMovie().then((m)=> console.log(`Person3: shows ${m}`));

console.log("Person4: shows Ticket");
console.log("Person5: shows Ticket");