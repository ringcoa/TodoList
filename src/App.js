import React , {useState, useCallback ,useRef} from 'react';
import './App.css';
import List from './List.jsx'
function App() {
  const [todos , setTodos] = useState([
    {
      id : 1,
      text : '할일',
      done : false,
    },
    { 
      id : 2,
      text : '할일2',
      done : true,
    },    {
      id : 3,
      text : '할일3',
      done : false,
    },    {
      id : 4,
      text : '할일4',
      done : false,
    }
  ]);

  //const [doneList , setDoneList] = useState([]);
  const [value , setValue] = useState('');
  const [editstate , setEditState] = useState(false)
  const [targetId , setTargetId] = useState(-1)
  const nextId = useRef(5)

  const Insert= useCallback((text)=>{
    console.log('인설트 실행')
      const todo = {
        id : nextId.current,
        text : text,
        done : false
      };
      setTodos(todos.concat(todo));
      nextId.current = nextId.current +1;
  } , [todos]);

  const onChange = useCallback((e)=>{
    console.log('벨류체인지')
    setValue(e.target.value);
  },[])

  const onClick = useCallback(
    (e) => {
      console.log('버튼클릭')
      e.preventDefault()
      if(value == '')return ;
      Insert(value)
      setValue('')
      
    },[value]);

    const delet = useCallback((id)=>{
      console.log(`${id} 삭제`)
      setTodos(todos.filter(todo => todo.id !== id))
  },[todos])

  const cheked = useCallback((id , text , done) =>{
    console.log('체크토글')
    done = !done
    //onsole.log(id , text , done)
    setTodos(todos.map(todo => todo.id === id ? {...todo , done : !todo.done} : todo))
  },[todos])

  const edit = (id , text) =>{
    console.log('수정상태')
    setValue(text);
    setEditState(true)
    setTargetId(id)
     
    // setTodos(todos.map(todo => id === todo.id ? {...todo, text : value } : todo))
  }
  const onClickedit = (e)=>{
    console.log('수정완료')

    e.preventDefault()
   
    setTodos(
      todos.map(todo =>  todo.id === targetId ? {...todo , text : value} : todo )
    )
    setValue('');
    setEditState(false)
  }

  const clickEditCancel = (e)=>{
    setEditState(false);
    setTargetId(-1)
    setValue('')
  }

  return (
    <>
      <div id="wrap">
        <h1>TODO LIST</h1>
        <form>
          <input className="input_todo" type="text" value={value} onChange={onChange} placeholder="할일을 적어주세요!">
          </input>
          {editstate ? <i className="far fa-times-circle" onClick={clickEditCancel}></i> : ''}
          {editstate ? <button onClick={onClickedit} className='list_add'>수정</button> : <button onClick={onClick} className='list_add'>+</button>}
        </form>
        <List todos ={todos} delet={delet} cheked={cheked} edit={edit}/>
      </div>
    </>
  );
}

export default App;
