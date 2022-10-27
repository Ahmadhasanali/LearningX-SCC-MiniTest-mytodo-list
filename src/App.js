import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

let num=0;
function App() {

  const [datas, setDatas] = useState([
    {
      id:0,
      title:'Something'
    }
  ]);
  console.log(datas);
  const [value, setValue] = useState('')

  const handleInput = (event) => {
    setValue(event.target.value);
  }

  const addData = () => {
    setDatas([...datas, {id:num+=1, title: value  }])
    setValue('')
  }

  return (
    <div className="App">
      <input onChange={handleInput} value={value}/>
      <button onClick={addData}>Add</button>
      <h1>Todo List</h1>

      <div className='list-container'>
        {datas.map((data) => {
          return (
          <List 
            title={data.title} 
            key={data.id} />
          );
        })}
      </div>
    </div>
  );
}

function List({title}) {
  return (
    <div className='list-item'>{title}</div>
  )
}


export default App;
