import React from "react";
import { List, NoList } from "./List";
import {
  addTodo,
  deleteTodo,
  editTodo,
  setContent,
  setEdit,
  setInput,
} from "../action/updateList";
import { connect } from "react-redux";
import { store } from "../store/index";

// React:
class App extends React.Component {
  handleChange = (e) => {
    const inputContent = e.target.value;
    this.props.setInputTodos(inputContent);
  };

  handleAddClick = () => {
    if (this.props.todos.input) this.props.addTodos();
    console.log(
      "add clicked",
      this.props.todos.content,
      this.props.todos.input
    );
  };

  handleEdit = () => {
    editTodo();
  };
  render() {
    // console.log(store);
    console.log(this.props.todos);
    return (
      <div id="toDoApp">
        <label id="toDoTitle" htmlFor="basic-input">
          <h2 className="text-monospace">Add new things To Do:</h2>
        </label>
        <div id="toDoAdd" className="input-group">
          <input
            onChange={this.handleChange}
            id="basic-input"
            className="form-control"
            type="text"
            value={this.props.todos.input}
            placeholder="Thing to do"
          />
          <div className="input-group-append">
            <button
              onClick={this.handleAddClick}
              className="btn btn-outline-primary"
            >
              Add
            </button>
          </div>
        </div>
        {this.props.todos.listContents.length ? (
          <List
            state={this.props.todos}
            addTodos={this.props.addTodos}
            deleteTodos={this.props.deleteTodos}
            editTodos={this.props.editTodos}
            setContentTodos={this.props.setContentTodos}
            setInputTodos={this.props.setInputTodos}
            setEditTodos={this.props.setEditTodos}
          />
        ) : (
          <NoList />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodos: () => dispatch(addTodo()),
    deleteTodos: (content) => dispatch(deleteTodo(content)),
    editTodos: (content) => dispatch(editTodo(content)),
    setContentTodos: (content) => dispatch(setContent(content)),
    setInputTodos: (inputContent) => dispatch(setInput(inputContent)),
    setEditTodos: () => dispatch(setEdit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
