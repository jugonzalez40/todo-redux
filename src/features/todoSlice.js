import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      console.log(state, action);
      state.todoList.push(action.payload);
    },
    checkTodo: (state, { payload }) => {
      console.log(state, { payload });
      const item = state.todoList.find(
        (todoItem) => todoItem.id === payload.id
      );
      item.done = !item.done;
    },
  },
});

export const { saveTodo, checkTodo } = todoSlice.actions;
export default todoSlice.reducer;

export const selectTodoList = (state) => state.todos.todoList;
