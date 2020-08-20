import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import PlannerDay from './components/PlannerDay';
import styled from 'styled-components';
import axios from 'axios'

export const apiUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-isaac'

const PlannerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  padding: 32px;
`

function App() {
  const [tasks, setTasks] = useState([])   

  const getTasks = () => {
    axios.get(apiUrl).then((response) => {
      setTasks(response.data)
    })
  }

  useEffect(() => {
    getTasks() 
       
  }, [])

  const filterTasksByDay = (day) => {
    return tasks.filter((task) => {
      return task.day === day    
    })
  }
  
  return (
    <div>
      <TaskForm updateTasks={getTasks}/>
      <PlannerContainer>
        <PlannerDay dayName={'segunda'} tasks={filterTasksByDay('segunda')} />
        <PlannerDay dayName={'terca'} tasks={filterTasksByDay('terca')} />
        <PlannerDay dayName={'quarta'} tasks={filterTasksByDay('quarta')} />
        <PlannerDay dayName={'quinta'} tasks={filterTasksByDay('quinta')} />
        <PlannerDay dayName={'sexta'} tasks={filterTasksByDay('sexta')} />
        <PlannerDay dayName={'sabado'} tasks={filterTasksByDay('sabado')} />
        <PlannerDay dayName={'domingo'} tasks={filterTasksByDay('domingo')} />        
      </PlannerContainer>     
    </div>
  );
}

export default App;
