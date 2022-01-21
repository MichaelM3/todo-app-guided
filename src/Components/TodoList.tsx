import React from 'react'
import { ITask } from '../Interfaces'
import { TodoTask } from './TodoTask'

interface Props {
    todoList: ITask[];
    setTodoList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const TodoList: React.FC<Props> = ({ todoList, setTodoList }) => {

    const completeTask = (taskNameToDelete: string): void => {
        setTodoList(todoList.filter(task => {
            return task.taskName !== taskNameToDelete
        }))
    }

    const displayTodos = todoList.map((todo: ITask, key: number) => {
        return <TodoTask completeTask={completeTask} key={todo.taskName} taskObj={todo} />
    })


    return (
        <div className="todoList">
            {displayTodos}
        </div>
    );
}