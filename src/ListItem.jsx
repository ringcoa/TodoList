import React ,{useCallback , useMemo} from 'react'

const ListItem = ({todos , delet ,cheked ,edit}) => {
    const {id,text,done} = todos;

    const clickedit = useCallback(() =>{
        if(done) return
        edit(id ,text)
    }, [todos])
    return useMemo(()=>(
        <li className="list_item">
            <div className="list_left">
                <input type="checkbox" checked={done} onChange={()=> cheked(id, text , done)}/>
                <span>{text}</span>
            </div>
            <div className="list_right">
                <i className="fas fa-pen" onClick={clickedit}></i>
                <i className="far fa-trash-alt" onClick={() => delet(id)}></i>
            </div>
        </li>
    ),[todos  , delet])
}

export default ListItem