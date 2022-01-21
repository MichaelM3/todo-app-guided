import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
    taskObj: ITask;
}

export const TodoTask: React.FC<Props> = ({ taskObj }) => {

    // const completed = taskObj.complete ? "Completed" : "Not Completed"

    return (
        <div className='task'>
            <div className="content">
                <span>{taskObj.taskName}</span>
                <span>{taskObj.deadline}</span>
            </div>
            <button>X</button>
        </div>
    );
}