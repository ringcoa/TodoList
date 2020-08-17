import React , {useMemo} from 'react'
import ListItem from './ListItem'

const List = ({todos ,delet ,cheked , edit}) =>{
    return useMemo(()=>(
        <ul className="list">
            {todos.map(todo => <ListItem  todos={todo} key={todo.id} delet={delet} cheked={cheked} edit={edit}/>) }
        </ul>
    ),[todos])
}
export default List