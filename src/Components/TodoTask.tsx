import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
    taskObj: ITask;
    completeTask(taskNameToDelete: string): void;
}

export const TodoTask: React.FC<Props> = ({ taskObj, completeTask }) => {

    // const completed = taskObj.complete ? "Completed" : "Not Completed"

    return (
        <div className='task'>
            <div className="content">
                <span>{taskObj.taskName}</span>
                <span>{taskObj.deadline}</span>
            </div>
            <button onClick={() => {completeTask(taskObj.taskName)}}>X</button>
        </div>
    );
}