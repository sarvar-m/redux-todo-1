import * as actionTypes from "./actionTypes";

export const addTodo = () => {
  return {
    type: actionTypes.ADD_CONTENT,
  };
};

export const deleteTodo = (content) => {
  return {
    type: actionTypes.DELETE_CONTENT,
    payload: content,
  };
};

export const editTodo = (content) => {
  return {
    type: actionTypes.EDIT_CONTENT,
    payload: content,
  };
};

export const setContent = (content) => {
  return {
    type: actionTypes.SET_CONTENT,
    payload: content,
  };
};

export const setInput = (inputContent) => {
  return {
    type: actionTypes.SET_INPUT,
    payload: inputContent,
  };
};

export const setEdit = () => {
  return {
    type: actionTypes.SET_EDIT,
  };
};
