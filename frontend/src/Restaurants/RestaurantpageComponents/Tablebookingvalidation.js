const Tablebookingvalidation=(values)=>{
    const {name,email,phone,date,time,people}=values
    let today=new Date()
    const errors={}
    if(name==="")
    {
        errors.name="Please enter the booking name"
    }

    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
    {
      errors.email="Please enter a valid email address" 
    }
    if(!phone)
    {
        errors.phone="Please enter your phone number"
    }
    if(!date)
    {
        errors.date="Please enter a date of your booking"
    }
    if(new Date(date)<today)
    {
        console.log(new Date(date)<today)
        errors.date="Please enter a date in future"
    }
    if(!time)
    {
        errors.time="Please enter the time"
    }
    if(people==="")
    {
        errors.people="Please enter the number of people"
    }
    return Object.keys(errors).length===0?{...errors,present:false}:{...errors,present:true}

}
export default Tablebookingvalidation