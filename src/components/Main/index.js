import React from 'react'
import * as S from './styles.js'

export default function Main() {
  return (
    <S.Container>
      <S.InputBox>
        <S.Input type="text" />
      </S.InputBox>

      <S.List>
        <S.Text>tarefas</S.Text>

        <S.Task>
          Cough furball into food bowl then scratch owner for a new one eat and than sleep on your face meow to be let out making sure that fluff gets into the owner's eyes and kitty time or lick human with sandpaper tongue
          <S.Check type="checkbox" />
        </S.Task>
      </S.List>
    </S.Container>
  )
}