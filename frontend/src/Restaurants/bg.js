import React from 'react'

function bg() {
    const [bgcolor,setBgColor]=useState(false)
    const handleClick=()=>{
        setBgColor()
    }
    const bgcolour={
        backgroundColor:'red'
    }
  return (
    <div>
        <button type="button" onClick={handleClick}></button>
    </div>
  )
}

export default bg