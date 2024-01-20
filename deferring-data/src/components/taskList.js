import React, {useState} from 'react'

export const initialTasks = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
    {id: 1, text: 'Watch a puppet show', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
  ];
export default function TaskList({taskState,  dispatch}) {
    const [editedTasks, setEditedTasks] = useState({});
    const [isEditing, setIsEditing] = useState({});
    console.log('isEditing', isEditing)
    console.log('editedTasks', editedTasks)

    const handleEditToggle = (taskId) => {
        setIsEditing((prevIsEditing) => ({
          ...prevIsEditing,
          [taskId]: !prevIsEditing[taskId],
        }));
      };
    
      const handleInputChange = (taskId, newValue) => {
        setEditedTasks((prevEditedTasks) => ({
            
          ...prevEditedTasks,
          [taskId]: newValue,
        })
        );
        
      };
    
      return (
        <div>
          {taskState.map((task) => (
            <div key={task.id}>
              <input
                type="text"
                value={isEditing[task.id] ? editedTasks[task.id] || task.text : task.text}
                onChange={(e) => handleInputChange(task.id, e.target.value)}
                disabled={!isEditing[task.id]}
              />
              <button
                onClick={() => {
                  dispatch({
                    type: 'DELETE_TASK',
                    id: task.id,
                  });
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  if (isEditing[task.id]) {
                    // Save changes
                    dispatch({
                      type: 'EDIT_TASK',
                      id: task.id,
                      text: editedTasks[task.id] || task.text,
                    });
                  }
                  // Toggle edit mode
                  handleEditToggle(task.id);
                }}
              >
                {isEditing[task.id] ? 'Save' : 'Edit'}
              </button>
            </div>
          ))}
        </div>
      );
    }