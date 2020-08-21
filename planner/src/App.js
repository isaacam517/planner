import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import PlannerDay from './components/PlannerDay';
import styled from 'styled-components';
import axios from 'axios'

export const apiUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-isaac/'

const PlannerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  padding: 32px;
  min-height:380px;
`

const Header = styled.div`
  background-color: #E8DAEF; 
  text-align:center;
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
      <Header>
        <h1>PLANILHA DE ATIVIDADES DA SEMANA</h1>
        <p>Clique na atividade que deseja excluir</p>
      </Header>
      <TaskForm updateTasks={getTasks}/>
      <PlannerContainer>
        <PlannerDay getTasks={getTasks} dayName={'Segunda'} tasks={filterTasksByDay('segunda')} />
        <PlannerDay getTasks={getTasks} dayName={'Terça'} tasks={filterTasksByDay('terca')} />
        <PlannerDay getTasks={getTasks} dayName={'Quarta'} tasks={filterTasksByDay('quarta')} />
        <PlannerDay getTasks={getTasks} dayName={'Quinta'} tasks={filterTasksByDay('quinta')} />
        <PlannerDay getTasks={getTasks} dayName={'Sexta'} tasks={filterTasksByDay('sexta')} />
        <PlannerDay getTasks={getTasks} dayName={'Sábado'} tasks={filterTasksByDay('sabado')} />
        <PlannerDay getTasks={getTasks} dayName={'Domingo'} tasks={filterTasksByDay('domingo')} />        
      </PlannerContainer>     
    </div>
  );
}

export default App;
