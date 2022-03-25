import axios from 'axios'
import queryStringify from 'querystringify'
 export const Orderbooking = (queryString,id) => {
     const Booking=async(order,email,id)=>{
        const res= await axios.post("http://localhost:3002/Restaurant/order/success",{
             order,
             email,
             id
         })
         return true
     }
    const email=JSON.parse(localStorage.getItem('email'));
    const Restaurantid=id
    let orders=[]
    queryString.map((item,i)=>{
      if(i===0)
      {
       return orders.push(queryString.slice(0,3).join('&'))
      }
      if(i%3===0 &i!==0)
      {
      return orders.push(queryString.slice(i,i+3).join('&'))
      }
    })
  let items=[]
   orders.map(item=>{
     return items.push(queryStringify.parse(item))
   })
  Booking(items,email,Restaurantid)
};

export const OrderDetails=async(email)=>{
        const res=await axios.get(`http://localhost:3002/Restaurant/orderdetails?email=${email}`)
        return res.data
      }
export const TableBooking=async(data)=>{
   const {name,email,phone,date,time,people,message,restaurant}=data
      const res=await axios.post("http://localhost:3002/Restaurant/tablebooking",{
        name,
        email,
        phone,
        date,
        time,
        people,
        message,
        restaurant
      })
      return res.data
}