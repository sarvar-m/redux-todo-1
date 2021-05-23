import * as actionTypes from "../action/actionTypes";

const initialState = {
  listContents: [{ id: 1, value: "NY" }],
  input: "",
  content: "",
  edit: false,
};

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CONTENT:
      const newContent = {
        id: Date.now(),
        value: state.input,
      };
      return {
        ...state,
        listContents: state.listContents.concat(newContent),
        input: "",
      };
    case actionTypes.EDIT_CONTENT:
      var newContentList = [...state.listContents];
      var index = newContentList.indexOf(state.content);
      if (index !== -1) {
        newContentList[index].value = state.input;
        return {
          ...state,
          listContents: newContentList,
          input: "",
          edit: false,
        };
      } else {
        return {
          ...state,
        };
      }
    case actionTypes.DELETE_CONTENT:
      newContentList = [...state.listContents];
      index = newContentList.indexOf(state.content);
      if (index !== -1) {
        newContentList.splice(index, 1);
        return {
          ...state,
          listContents: newContentList,
        };
      } else {
        return {
          ...state,
        };
      }
    case actionTypes.SET_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case actionTypes.SET_CONTENT:
      return {
        ...state,
        content: action.payload,
      };
    case actionTypes.SET_EDIT:
      return {
        ...state,
        edit: !state.edit,
      };
    default:
      return state;
  }
};

export default todoListReducer;
