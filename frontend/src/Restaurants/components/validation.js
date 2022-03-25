const validate=(values)=>{
    const errors={}
    
    if(values.name==="")
    {
      errors.name="Name is required"
    }
    if(!values.email)
    {
      errors.email="Email is required"
    }
    if(!values.password)
    {
      errors.password="Password is required"
    }
    if(values.password.length<8)
    {
      errors.passwordlength="Password must be at least 8 characters"
    }
    if(!values.passwordConfirm)
    {
      errors.passwordConfirm="Password Confirmation is required"
    }
    if(values.password!==values.passwordConfirm)
    {
      errors.passwordcheck="Password and Password confirmation must be the same"
    }
    return errors
  }
  export default validate