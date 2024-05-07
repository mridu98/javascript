// promises  


console.log('start')

const sub = new Promise((resolve,reject)=>{
        
    let a=Math.random();
    if(a<0.3){
        reject(new Error(`not successful`))
    }
    setTimeout(()=>{
        resolve(`sucessful`)
    }, 1000)
})

sub.then((res)=>{
    console.log(res)
    }).catch((err)=>{
    console.log(err)
})
console.log('end')
