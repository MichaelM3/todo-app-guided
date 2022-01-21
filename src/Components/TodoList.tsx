import React from 'react'
import { ITask } from '../Interfaces'
import { TodoTask } from './TodoTask'

interface Props {
    todoList: ITask[];
}

export const TodoList: React.FC<Props> = ({ todoList }) => {

    const displayTodos = todoList.map((todo: ITask, key: number) => {
        return <TodoTask key={todo.taskName} taskObj={todo} />
    })

    return (
        <div className="todoList">
            {displayTodos}
        </div>
    );
}