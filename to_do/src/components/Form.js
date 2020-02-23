import React from "react";


class Form extends React.Component {
   
    handleSubmit = (e) =>{
        e.preventDefault()
        let input = document.querySelector("input")
    this.setState({
        state:input.value
    })
   let li = document.createElement("li")
    li.innerText = input.value
    let form = document.querySelector("form")
    form.appendChild(li)

}



    
    render() {
        return (
        <div>
        <form onSubmit= {this.handleSubmit} >

            <input type="text" placeholder="Enter To-do">
            </input>
            <button onClick = {this.notify}>

            </button>
        </form>
        
        </div>
    );
    }
}

export default Form;