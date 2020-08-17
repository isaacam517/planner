import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const SelectContainer = styled(FormControl)`
    && {
        min-width: 150px;
    }
`

const TaskFormContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: end;
    gap: 8px;
    grid-auto-flow: column;

`

function TaskForm() {
  return (
    <TaskFormContainer>
      <TextField label={'Nova tarefa'}/>
      <SelectContainer>
        <FormControl >
            <InputLabel id="planner-day-select">Dia da Semana</InputLabel>
            <Select
            labelId="planner-day-selec"
            id="demo-simple-select"
            //   value={age}
            //   onChange={handleChange}
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
      <Button color={'primary'} variant={'contained'}>Criar Tarefa</Button>       
    </TaskFormContainer>
  );
}

export default TaskForm;
