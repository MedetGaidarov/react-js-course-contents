
import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import HelloWorld from './mock_folder_lesson/main';
import PostList from './mock_folder_lesson/post';

function App() {

  const [todoList, setTodoList] = useState([])


  const handleAddTodoButtonClick = (todo) =>
  {
    setTodoList([...todoList, todo])
    console.log(todoList)
  }
  // create new todo function 
  // we got todo 
  return (
    <div className="App" style={{
      margin:"100px 500px"
    }}>



        <AddTodo onClickAddTodo={handleAddTodoButtonClick} />
    
        <TodoList todoList = {todoList}/>
    </div>
  );
}

export default App;
