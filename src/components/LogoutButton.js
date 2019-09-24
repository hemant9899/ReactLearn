import React from "react"

class LogoutButton extends React.Component{
  constructor(){
    super()
    this.state = {
      isLoggedin : false,
      buttonText : "Hel"
    }
    this.handlerButtonClick = this.handlerButtonClick.bind(this)
  }
  componentDidMount(){
    // setTimeout(() => {
    //   this.setState(
    //     {
    //       isLoggedin:true
    //     }
    //   )
    // }, 1500);
  }
  handlerButtonClick(isLoggedin){
    console.log("slcois",isLoggedin);
    this.setState(
      {
        isLoggedin : !isLoggedin,
        buttonText : "Hel"+isLoggedin
      }
    )
  }
  render(){

    return (
      <div>Yo you are :  
      {this.state.isLoggedin && <div>Logged IN</div>} 
      { !this.state.isLoggedin && <div>Logged OUT</div>}
      <button onClick={()=>this.handlerButtonClick(this.state.isLoggedin)}>
        {this.state.buttonText}
      </button>

       </div>
    )
  }
}

export default LogoutButton