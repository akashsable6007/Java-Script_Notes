 

 const promiseOne = new Promise (function (resolve, reject) {

    setTimeout(function () {
        console.log("async task is complete");
        resolve()
    }, 2000)
 })

 promiseOne.then(function () {
    console.log("promise connsumed");
 })

 //////////////////////////////////////////////////////

 new Promise (function (resolve, reject ) {
    setTimeout(function () {
        console.log("async task 2");
        resolve()
    })
 }).then(function() {
    console.log("asyn2 is resolved");
 })

 ////////////////////////////////////////////////////////////

 const promiseThree = new Promise (function (resolve, reject ) {
    setTimeout(function () {
            resolve({username:"akash"})
    }, 1000)
 })

 promiseThree.then(function (user) {
    console.log(user);
 })

 //////////////////////////////////////////////////////////////////

 const promiseFour = new Promise (function (resolve, reject) {
    setTimeout(function (){
            let error = true
            if (!error){
                resolve({username:"harsha", pass:"aakuu"})
            }
            else {
                reject("ERROR: something went wrong")
            }
    }, 1000)
 })

const username = promiseFour.then( (user) => {
    console.log(user)
    return user.username
 }).then((username) => {
    console.log(username);
 }).catch( function (error) {
    console.log(error);
 }).finally(() => {console.log("akkuu work is done");
})

/////////////////////////////////////////////////////////////////

const promiseFive = new Promise ( function (resolve, reject) {
    setTimeout( function () {
        let error = true
        if(!error){
            resolve({username:"ladubai"})
        }
        else{
            reject("ERROR")
        }
    }, 1000)
});

async function connsumedPromiseFive () {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
connsumedPromiseFive()

fetch('https://api.github.com/users/hiteshchoudhary')
.then( (response) => {
    return response.json()
}).then( (data) => {
    console.log(data);
}).catch( (error) => console.log(error));