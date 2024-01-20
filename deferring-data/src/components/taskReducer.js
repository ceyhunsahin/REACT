let nextId = 3;


export function TaskReducer (tasks, action){
  switch (action.type) {
    case 'ADD_TASK':
      return [...tasks, {id: nextId++, text: action.text, done: action.done}]
    case 'EDIT_TASK':
      return tasks.map(task => task.id === action.id? {...task, text: action.text} : task)
    case 'DELETE_TASK':
      return tasks.filter(task => task.id!== action.id)
    default:
      return tasks
  }

}
