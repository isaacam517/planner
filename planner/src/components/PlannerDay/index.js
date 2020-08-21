import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { apiUrl } from '../../App';


const PlannerDayContainer = styled.div`
    border: 1px solid black;
    padding: 0 8px;
`

const Task = styled.div`    
    padding: 0 8px;
`

const P = styled.p`
    color: blue;
        :hover {            
            color: red;
        } 
`

function PlannerDay(props) {

    const delTask = (event) => {
        
        axios.delete(`${apiUrl}${event.target.id}`).then((response) => {
            props.getTasks()
            event.preventDefault()
         })
    }

    return (
        <PlannerDayContainer>
            <div>
                <div>
                    <p><strong>{props.dayName}</strong></p>
                </div>
                <Task>
                    {props.tasks.map((task) => {
                        return <P onClick={delTask} id={task.id} key={task.id}>{task.text}</P>
                    })}
                </Task>
            </div>
        </PlannerDayContainer>
    )
}

export default PlannerDay;