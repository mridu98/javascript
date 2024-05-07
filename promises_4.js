//  asynchronous code
//write callback code with the help of promises 

console.log('start')

const username = 'Mridul'


function ImportantAction(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`hello ${username} `)
        }, 1000)    
    }) 
}

function likeTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`please like this ${video}`)
        }, 1000)    
    }) 
}

function shareTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`please share this ${video}`)
        }, 1000)    
    }) 
}

ImportantAction(username).then((res)=>{
    console.log(res)
    likeTheVideo('Mis-Matched').then((res)=>{
        console.log(res)
        shareTheVideo('Mis-Matched').then((res)=>{
            console.log(res)
       })
    })
})
.catch((err)=>{
        console.log(err)
    })



console.log('stop')