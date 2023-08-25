import React from 'react'
import './Admin.css'

const Card = (props) => {
    const [checked, setChecked] = React.useState(false); 
   function handleChange(e) {
      setChecked(e.target.checked);

      //call for verfying user on click
   }
  return (
    <div class="flex-container">
  <div className="row-elements" style={{marginRight:'20px'}}>{props.col1}</div>
  <div className="row-elements" style={{marginRight:'20px'}}>{props.col2}</div>
  <div className="row-elements "style={{marginRight:'20px'}}>{props.col3}</div>
  <div className="row-elements" style={{marginRight:'20px'}}> <input value = "test" type = "checkbox" onChange = {handleChange} /></div>
  <div className="row-elements" style={{marginRight:'20px'}}>{props.col5}</div>
</div>
  )
}

export default Card