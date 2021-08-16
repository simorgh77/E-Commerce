export const login=(UserName,Password)=>{
return new Promise((resolve,reject)=>{
    fetch('api/accounts/login',{
        method:'POST',
        body:JSON.stringify ({UserName,Password}),
    }).then(res=>res.json())
    .then(data=>resolve(data))
    .catch(error=>reject(error))
})
}