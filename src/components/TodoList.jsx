import React from 'react'

export const TodoList = ({taskList, setTaskList}) => {
  return (
    <div className='todoList'>
      <div className='todos'>
        {taskList.map((task, index) => (
          <div className='todo' key={index}>
            <div className="icons">
              <i className='fas fa-check'></i>
            </div>
            <div className='todoText'>
              <span>{task.text}</span>
            </div>
            <div className="icons">
              <i className='fas fa-trash'></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
