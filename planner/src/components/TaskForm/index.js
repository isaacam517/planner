import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { apiUrl } from '../../App';

const SelectContainer = styled(FormControl)`
    && {
        min-width: 150px;
    }
`

const TaskFormContainer = styled.form`
    display: grid;
    justify-content: center;
    align-items: end;
    gap: 8px;
    grid-auto-flow: column;

`

const useInputValue = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue)

  const onChange = (event) => {
    setInputValue(event.target.value)
  }

  return [inputValue, onChange]
}

function TaskForm(props) {
  const [newTaskText, onChangeTaskText] = useInputValue('')
  const [newTaskDay, onChangeTaskDay] = useInputValue('')

  const onSubmitTaskForm = (event) => {
    event.preventDefault()
    const body = {
      "text": newTaskText,
	    "day": newTaskDay
    }
    axios.post(apiUrl, body).then((response) => {
      console.log(response)
      props.updateTasks()

    })
  }

  return (
    <TaskFormContainer onSubmit={onSubmitTaskForm}>
      <TextField
        label={'Nova tarefa'}
        value={newTaskText}
        onChange={onChangeTaskText}
      />
      <SelectContainer>
        <FormControl >
          <InputLabel id="planner-day-select">Dia da Semana</InputLabel>
          <Select
            labelId="planner-day-selec"
            id="demo-simple-select"
            value={newTaskDay}
            onChange={onChangeTaskDay}
          >
          <MenuItem value={'segunda'}>Segunda</MenuItem>
          <MenuItem value={'terca'}>Terça</MenuItem>
          <MenuItem value={'quarta'}>Quarta</MenuItem>
          <MenuItem value={'quinta'}>Quinta</MenuItem>
          <MenuItem value={'sexta'}>Sexta</MenuItem>
          <MenuItem value={'sabado'}>Sábado</MenuItem>
          <MenuItem value={'domingo'}>Domingo</MenuItem>
          </Select>
        </FormControl>
      </SelectContainer>
      <Button
        color={'primary'} 
        variant={'contained'}
        type={'submit'}
      >
        Criar Tarefa
      </Button>       
    </TaskFormContainer>
  );
}

export default TaskForm;
