import React from 'react'
import ListItem from './ListItem'

export default function List({todos ,delet ,cheked , edit}) {
    return (
        <ul className="list">
            {todos.map(todo => <ListItem  todos={todo} key={todo.id} delet={delet} cheked={cheked} edit={edit}/>) }
        </ul>
    )
}
