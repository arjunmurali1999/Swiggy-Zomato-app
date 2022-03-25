import React from 'react'
import axios from 'axios'
import validate from './validation.js'
 const Registerationform = () => {
   const [values,setvalues]=React.useState({
     name:"",
     email:"",
     password:"",
     passwordConfirm:"",
     error:"",
     success:false
   })
   const [formerrors,setformerrors]=React.useState({})
   const signup=async(user)=>{
     try{
      // eslint-disable-next-line no-unused-vars
      const data=await axios.post("http://localhost:3002/api/ver1/users/signup",{...user})
      setvalues({...values,name:"",email:"",password:"",passwordConfirm:"",error:"",success:true})
     }catch(error)
     { 
      console.log(error.response.data.message)
      setvalues({...values,error:error.response.data.message,success:false})
     }
   }
   const handleClick=(event)=>{
     event.preventDefault()
     setvalues({...values,error:false})
     const validation=validate(values)
     setformerrors(({...validation}))
     signupfun()
   }
   const signupfun=()=>{
    if(Object.keys(formerrors).length===0)
    {
     signup({name:values.name,email:values.email,password:values.password,passwordConfirm:values.passwordConfirm})
    }
  }
   const handleChange=name=>event=>{
     setvalues({...values,error:false,[name]:event.target.value})
   }
   const showSuccess=()=>(
     <div className="alert alert-success" style={{display: values.success?"":"none"}}>
       You have successfully registered Please login <a href="/login" class="fw-bold text-body"><u>Login here</u></a>
     </div>
   )
   const showError=()=>(  
    <div className="alert alert-danger" style={{display: values.error?"":"none"}}>
    {values.error}
   </div>
   )
    return (
        <div>
        <section class="w-100 h-100" style={{backgroundColor: "#ff6666"}}>
      <div class="mask d-flex align-items-center h-100 gradient-custom-3 p-4">
        <div class="container h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"> 
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style={{borderRadius: "15px"}}>
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">
                    Create an account
                  </h2>
                  {showError()}
                  {showSuccess()}
                  <form>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example1cg">
                        Name</label>
                      <input
                        type="text"
                        id="form3Example1cg" onChange={handleChange('name')}
                        class="form-control form-control-lg" value={values.name} required/>
                        {formerrors.name && <p className="formsError">{formerrors.name}</p>}
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example3cg">
                        Email</label>
                      <input
                        type="email"
                        id="form3Example3cg" onChange={handleChange('email')} value={values.email}
                        class="form-control form-control-lg" required
                      />
                      {formerrors.email && <p className="formsError">{formerrors.email}</p>}
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4cg">
                        Password</label>
                      <input
                        type="password"
                        id="form3Example4cg" onChange={handleChange('password')} value={values.password}
                        class="form-control form-control-lg" required/>
                        {formerrors.password && <p className="formsError">{formerrors.password}</p>}
                        {formerrors.passwordlength && <p className="formsError">{formerrors.passwordlength}</p>}
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4cdg"
                        >Confirm your password</label>
                      <input
                        type="password"
                        id="form3Example4cdg" onChange={handleChange('passwordConfirm')} value={values.passwordConfirm}
                        class="form-control form-control-lg" required/>
                        {formerrors.passwordConfirm && <p className="formsError">{formerrors.passwordConfirm}</p>}
                        {formerrors.passwordcheck && <p className="formsError">{formerrors.passwordcheck}</p>} 
                    </div>
                    <div class="form-check d-flex justify-content-start mb-5">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg" required/>
                      <label class="form-check-label" for="form2Example3g">
                        I agree all statements in Terms of service
                      </label>
                    </div>
                    <div class="d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-danger btn-block btn-lg gradient-custom-4 text-body" onClick={handleClick}
                      ><span class="text-light">Register</span>
                      </button>
                    </div>
                    <p class="text-center text-muted mt-5 mb-0">
                      Have already an account?
                      <a href="/login" class="fw-bold text-body">
                    <u>Login here</u></a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    )
}
export default Registerationform
