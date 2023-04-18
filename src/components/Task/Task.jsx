import React, { useState } from 'react'
import s from './Task.module.css'
import cross from './cross.png'
import importants from './important.svg'

const Task = ({value, deleteTask, id , doneTask, isDone}) => {

  const [important, setImportant] = useState(true)

  const importantes = () => {
    setImportant((current) => !current);
  }



  return (
    <li className={ important ? s.box_task : s.box_task1}>
        <label>
            <input type="checkbox"
             className={s.check}
             checked={isDone}
             onClick={() => doneTask(id)}
              />
            <p className={`${isDone ? s.box_task_done : null}`}>{value}</p>
        </label>
        <button className={important ? s.cross : s.cross1} onClick={() => deleteTask(id)}>
            <img className={s.img} src={cross} alt="" />
        </button>
        <button className={important ? s.important : s.important1} onClick={importantes}>
          <img className={s.important_image} src={importants} alt="" />
        </button>
    </li>
  )
}

export default Task;