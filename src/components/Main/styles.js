import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
`;

export const Text = styled.p`
  font: 600 1em Georgia, sans-serif;
  letter-spacing: 1px;
`;

export const InputBox = styled.form`
  width: 50%;
`;

export const Input = styled.input`
  padding: .5rem 1rem;
  width: 100%;
  color: #222;
  font: 300 1.2em Monospace, sans-serif;
  border: 1px solid #aaa;
  border-radius: 15px;
  outline: none;
`;

export const List = styled.ul`
  margin: 2rem 0;
  padding: 0;
  list-style: none;
`;

export const Task = styled.li`
  display: flex;
  justify-content: space-between;
  margin: .5rem 0;
  padding-bottom: 3px;
  font: 300 1.1em Courier, sans-serif;
  border-bottom: 3px dotted #aaa;
`;

export const Check = styled.input`
  min-width: 1.3rem;
  min-height: 1.3rem;
`;