import React from "react";
import axios from "axios";

export default class UpdateSocialTodo extends React.Component {
  state = {
    id: "",
    title: "",
    description: "",
    due_date: "",
    completed: "",
  };

  handleChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    axios
      .put("http://localhost:3004/socialtodo/" + this.state.id, {
        title: this.state.title,
        description: this.state.description,
        due_date: this.state.due_date,
        completed: this.state.completed,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log("api Erorr: ", err.response));

    this.setState({
      title: "",
      description: "",
      due_date: "",
      completed: "",
    });
  };

  render() {
    return (
      <div>
        <h1 className="addPut">Updating Socialtodo</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Id:
            <input
              type="text"
              name="id"
              value={this.state.id}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Due Date:
            <input
              type="text"
              name="due_date"
              value={this.state.due_date}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Completed:
            <input
              type="text"
              name="completed"
              value={this.state.completed}
              onChange={this.handleChange}
            />
          </label>
          <div>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    );
  }
}
