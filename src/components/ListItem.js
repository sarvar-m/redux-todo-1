import React from "react";

const ListItem = (props) => {
  // render() {
  console.log(props.handleDelete, "kkkk");

  return (
    <div className="list-group-item list-group-item-action d-flex justify-content-between">
      <span contentEditable={props.state.edit}>{props.todoItem.value}</span>
      <div className="btn-group btn-group-sm" role="group">
        <button
          onClick={() => props.handleEdit(props.todoItem)}
          className="btn btn-primary"
          type="button"
        >
          Update
        </button>
        <button
          onClick={() => props.handleDelete(props.todoItem)}
          className="btn btn-primary"
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  );
  // }S
};

export default ListItem;
