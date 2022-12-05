import React, { useState } from 'react'

export const InputForm = ({taskList, setTaskList, inputText}) => {

  const [InputText, setInputText] = useState("")
 
  const handleSubmit = (e) => {
    e.preventDefault();
    //タスクを追加する
    setTaskList([
      ...taskList,
      {
        text: InputText
      }
    ]);
    console.log(taskList);
  }

  const handleChange = (e) => {
    setInputText(e.target.value);

  }
  
  return (
    <div className='inputForm'>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button>
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  )
}
