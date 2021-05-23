import React from "react";
import ListItem from "./ListItem";

const List = ({
  state,
  addTodos,
  deleteTodos,
  editTodos,
  setContentTodos,
  setInputTodos,
  setEditTodos,
}) => {
  // console.log(state);
  const handleDelete = (item) => {
    setContentTodos(item);
    deleteTodos();
    console.log("handleDelete");
  };

  const handleEdit = (item) => {
    setEditTodos();
  };
  return (
    <div id="toDoList">
      <label htmlFor="basic-input">
        <span className="text-monospace">Things ToDo List</span>
        <br />
        <span className="text-monospace">Click on item to update:</span>
      </label>
      <div className="list-group">
        {state.listContents.map((item) => (
          <ListItem
            key={item.id}
            todoItem={item}
            deleteTodos={deleteTodos}
            addTodos={addTodos}
            editTodos={editTodos}
            setContentTodos={setContentTodos}
            setInputTodos={setInputTodos}
            setEditTodos={setEditTodos}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            state={state}
          />
        ))}
      </div>
    </div>
  );
};

const NoList = () => {
  return (
    <div
      id="toDoList"
      className="d-flex align-items-center justify-content-center"
    >
      <p className="text-muted text-monospace mt-5">Your list is empty</p>
    </div>
  );
};

export { List, NoList };
