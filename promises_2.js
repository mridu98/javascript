// simple code example of callback for asynchronous code


console.log('start')

const username = 'Mridul'


function ImportantAction(username,cb){
    setTimeout(()=>{
        cb(`hello ${username} `)
    }, 1000)
}

function likeTheVideo(video,cb){
    setTimeout(()=>{
        cb(`please like this ${video} `)
    }, 1000)
}

function shareTheVideo(video,cb){
    setTimeout(()=>{
        cb(`please share this ${video} `)
    }, 1000)
}

ImportantAction(username,(message)=>{
    console.log(message)
    likeTheVideo(`Mis-Matched`,(action)=>{
        console.log(action)
        shareTheVideo(`Mis-Matched`,(action)=>{
            console.log(action)
        })
    })
   
})



console.log('stop')