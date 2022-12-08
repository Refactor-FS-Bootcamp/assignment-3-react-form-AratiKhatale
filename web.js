import React, { Component, useState } from 'react'


export class Web extends Component {
  constructor(props) {
    super(props)

    this.state = {
       fname:'',
       lname:'',
       gender:'',
       checklist:{},
       dropdown:''
    }
  }

  handleUserChange = e=> { this.setState({ fname:e.target.value })}
  handleChange = e =>{ this.setState({ lname:e.target.value})}
  genderHandeler = e =>{ this.setState({ gender:e.target.value })}
  handleCheckbox = e => {this.setState({ checklist: e.target.value})}
  handledropdown = e => {this.setState({dropdown:e.target.value})}
  handlerSubmit = e =>{e.preventDefault();console.log(this.state)}
 
  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <div className='div-form'>
        <h1>WebPage</h1>
        <div>
       <label className='lable-main'>Fname: </label>
       <input type="text" id="fname" value={this.state.fname} onChange={this.handleUserChange} /><br />
       <label className='lable-main'>Lname: </label><input type="text" name="lname" id="lname" value={this.state.lname} onChange={this.handleChange} />
        </div>
        <div >
        <label className='lable-main'>Gender: </label>
          <input type="radio" value='male' name="gender" id="male"  onChange={this.genderHandeler}  /><label className='lable1'>Male</label> 
            <input type="radio" value='female' name="gender" id="female"  onChange={this.genderHandeler}  /><label className='lable1'>Female</label> 
            <input type="radio" value='other' name="gender" id="other"  onChange={this.genderHandeler}  /><label className='lable1'>Other</label>
          
        </div>
        <div  className='checkbox-div'> <label className='lable-main'>Language: </label>
            <input type='checkbox' name='language'onChange={this.handleCheckbox}  value='javascript' /><label className='lable1'>JavaScript</label> 
            <input  type='checkbox' name='language' onChange={this.handleCheckbox} value='html' /> <label className='lable1'>HTML</label> 
            <input type='checkbox' name='language' onChange={this.handleCheckbox}  value='css' /><label className='lable1'>CSS</label> 
           </div>
        <div className='dropdown-div'>
            <select id='dropdown' onChange={this.handledropdown}>
                <option value="Java">Java</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
            </select>
        </div><br />
        <button type='submit' onClick={this.handlerSubmit}>Submit</button>
        </div>
      </form>
    )
  }
}

export default Web