import React, { Component } from "react";

class Persondata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          name: "Setso",
          description: "Code is life",
        },
        {
          name: "Abu",
          description: "Code dey beeee keke",
        },
        
       
      ],
      name: "",
      description: "",
    };

  }
handleChange = (e) => {
  e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state.name)
    console.log(this.state.description)
};


handleSubmit = (e) => {
  e.preventDefault()
    const newBe = {
        name: this.state.name,
        description: this.state.description
    
    }
    
    this.setState({
        persons: [...this.state.person,newBe],
        name: "",
        description: ""
    })
    console.log(this.state.person)
}
 
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <br></br>
          <label>Name</label>
          <br></br>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
          <br></br>
          <label>Description</label>
          <br></br>
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>
          <br></br>
          <button>Submit</button>
        </form>
        {this.state.person.map((item, index) => {
          return (
            <div key={index}>
             
              <br></br>

              <h1>Name: {item.name}</h1>
              <h4>{item.description}</h4>
              <hr></hr>
            </div>
          );
        })}
      </section>
    );
  }
}

export default Persondata;
