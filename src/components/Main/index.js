import React, { useState } from 'react'
import * as S from './styles.js'

export default function Main() {
  
  let [ task, setTask ] = useState('');
  let [ taskList, setTaskList ] = useState([]);

  const handleChange = (e) => {
    setTask(task = e.target.value)
  }

  const handleAdd = (e) => {
    if (task.length > 0) {
      setTaskList(taskList = taskList.concat(task))
      setTask(task = '')
    }
    e.preventDefault()
  }

  return (
    <S.Container>
      <S.InputBox 
        onChange={(e) => handleChange(e)} 
        onSubmit={(e) => handleAdd(e)}
      >
        <S.Input 
          type="text"
          value={task}
        />
      </S.InputBox>

      <S.List>
        <S.Text>tarefas</S.Text>

        { taskList.map((task, i) => (
          <S.Task key={i}>
            {task}
            <S.Check type="checkbox" />
          </S.Task>
        ))}

      </S.List>
    </S.Container>
  )
}
