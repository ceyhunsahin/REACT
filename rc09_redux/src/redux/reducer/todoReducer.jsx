import { createSlice } from '@reduxjs/toolkit'

export const Initial_State = [
    {
        id: 0,
        title: '',
        completed: false,
    },


]

export const counterSlice = createSlice({
    name: 'todo',
    initialState: Initial_State,
    reducers: {
        addTodo: (state, value) => {
            console.log("state.length: ", state.length)

            const newTodo = {
                id: state.length + 1,
                title: value.payload,
                completed: false,
              };
              return [...state, newTodo];
        },
        deleteTodo: (state, id) => {
            console.log('id', id.payload)
            const newState = state.filter((item) => item.id !== id.payload);
             return newState;
        },
        clearTodoList: (state) => {
            return [];

            
          },
        toggleTodo: (state, action) => {
            console.log("action.payload: ", state[action.payload].completed)
            state[action.payload].completed =!state[action.payload].completed;
           
            
           
          
        },
    },
})

export const { addTodo, deleteTodo, clearTodoList, toggleTodo  } = counterSlice.actions
// bunlari Counter.js'e yolluyorum o dispatch edip yakalayacak

export default counterSlice.reducer // bunu store'a