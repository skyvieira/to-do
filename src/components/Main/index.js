import React, { useState } from 'react'
import * as S from './styles.js'

export default function Main() {
  
  let [ task, setTask ] = useState('');
  let [ taskList, setTaskList ] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleAdd = (e) => {
    if (task.length > 0) {
      setTaskList([task, ...taskList])
      setTask(task = '')
    }
    e.preventDefault()
  }

  const handleDelete = (e, i) => {
    setTaskList(taskList.filter((task, index) => index !== i))
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
          placeholder="O que precisa ser feito?"
        />
      </S.InputBox>

      <S.List>
        <S.Text>tarefas</S.Text>

        { taskList.map((task, i) => (
          <S.Task key={i}>
            {task}
            <S.TaskBox>
              <S.CheckBtn type="checkbox" />
              <S.RemoveBtn onClick={(e) => handleDelete(e, i)}>X</S.RemoveBtn>
            </S.TaskBox>
          </S.Task>
        ))}

      </S.List>
    </S.Container>
  )
}
