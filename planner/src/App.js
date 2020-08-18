import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import PlannerDay from './components/PlannerDay';
import styled from 'styled-components';
import axios from 'axios'

const PlannerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  padding: 32px;
`

function App() {
  const [tasks, setTasks] = useState([])   

  useEffect(() => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-isaac').then((response) => {
      console.log(response.data)
      setTasks(response.data)
    })
  }, [])

  const filterTasksByDay = (day) => {
    return tasks.filter((task) => {
      return task.day === day    
    })
  }
  
  return (
    <div>
      <TaskForm />
      <PlannerContainer>
        <PlannerDay dayName={'Segunda'} tasks={filterTasksByDay('Segunda')} />
        <PlannerDay dayName={'Terça'} tasks={filterTasksByDay('Terça')} />
        <PlannerDay dayName={'Quarta'} tasks={filterTasksByDay('Quarta')} />
        <PlannerDay dayName={'Quinta'} tasks={filterTasksByDay('Quinta')} />
        <PlannerDay dayName={'Sexta'} tasks={filterTasksByDay('Sexta')} />
        <PlannerDay dayName={'Sábado'} tasks={filterTasksByDay('Sábado')} />
        <PlannerDay dayName={'Domingo'} tasks={filterTasksByDay('Domingo')} />        
      </PlannerContainer>     
    </div>
  );
}

export default App;
