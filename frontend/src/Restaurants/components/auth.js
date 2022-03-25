

 export const authenticate = (data,name,email,next) => {
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt',JSON.stringify(data))
        localStorage.setItem('name',JSON.stringify(name))
        localStorage.setItem('email',JSON.stringify(email))
        next()
    }
}
export const signout=(next)=>{
    if(typeof window !== 'undefined'){
        localStorage.removeItem('jwt')
        localStorage.removeItem('name')
        next()
        const issignout=true
        return issignout
    }
}

export const isAuthenticated=()=>{
    if(typeof window === 'undefined'){
         return false
    }
    if(localStorage.getItem('jwt'))
    {
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else{
        return false
    }
}
