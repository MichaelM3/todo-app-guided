import React, { FC, ChangeEvent, useState } from 'react'
import { ITask } from '../Interfaces';

interface Props {
    todoList: ITask[];
    setTodoList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const TodoForm: FC<Props> = ({ todoList, setTodoList }) => {
    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
        setTask(event.target.value)
        } else if (event.target.name === "deadline") {
        setDeadline(Number(event.target.value))
        }
    };

    const addTask = (): void => {
        const taskObj = { taskName: task, deadline: deadline, complete: false }
        setTodoList([...todoList, taskObj])
        setTask("")
        setDeadline(0)
    }

    return (
        <div className="header">
            <div className="inputContainer">
                <input type="text" 
                    placeholder='Task...'  
                    name="task"
                    value={task}
                    onChange={handleChange}
                />
                <input type="number" 
                    placeholder="Deadline (in days)" 
                    name="deadline" 
                    value={deadline}
                    onChange={handleChange}
                />
            </div>
            <button onClick={addTask}>Add task</button>
        </div>
    );
}