// simple code example of callback for asynchronous code
//callback


console.log('start')

function ImportantAction(username,cb){

    setTimeout(()=>{
        cb(`hello ${username} `)
    }, 1000)
    console.log(`don't worry ${username} keep practice `) // it will not come in asynchronous code
}

ImportantAction('Mridul',(message)=>{
    console.log(message)
})

console.log('stop')