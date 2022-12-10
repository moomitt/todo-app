import React from 'react'

export const TodoList = ({taskList, setTaskList}) => {

  const handleDelete = (id) => {
    //タスクを削除する
    setTaskList(taskList.filter((task) => task.id !== id));
  }

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
              <button onClick={() => handleDelete(task.id)}>
                <i className='fas fa-trash'></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
