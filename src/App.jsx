  import { useEffect, useState } from 'react'
  import { MdEdit, MdDelete } from "react-icons/md";
  import './App.css'
  import Navbar from './components/Navbar'
  function App() {
    const [todo, setTodo] = useState("")
    const [Todos, setTodos] = useState([]);
    useEffect(() => {
      let TodoString = localStorage.getItem("todos");
      if (TodoString) {
        let Local_Todos = JSON.parse(TodoString);
        setTodos(Local_Todos);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(Todos));
    }, [Todos]);

    // 
    // 
    // 
    // 
    // Sort finihed and not finished
    const  Finished=()=> {
      let Finished_Todos = Todos.filter((iteration) => {
        return iteration.status == true;
      });
      setTodos(Finished_Todos)
    }
    
    const  NotFinished=()=> {
      let not = Todos.filter((iteration) => {
        return iteration.status == false;
      });
      setTodos(not)
      
    }
    //  End of storing

    

    const handleEdit = (index) => {
      let t = Todos[index]
      console.log(t);
      let EditTodo = Todos.filter((iteration, idx) => {
        return idx !== index;
      });
      setTodo(t.todo);
      setTodos(EditTodo);
    }
    const handleDelete = (index) => {
      let newTodos = Todos.filter((iteration, idx) => {
        return idx !== index;
      });
      setTodos(newTodos);
    }

    const handleAdd = () => {
      setTodos([...Todos, { todo, status: false }]);
      setTodo("");

    }
    const handleChange = (e) => {
      setTodo(e.target.value);
    }
    const handleCheckbox = (e, index) => {
      let newTodos = [...Todos];
      newTodos[index].status = !newTodos[index].status;
      setTodos(newTodos);
    }
    return (
      <>
        <Navbar />
        <div className="container mx-auto mt-4 rounded-lg md:p-3 p-2">
          <h2 className='text-center font-bold text-[#FFE66D] text-2xl m-5'>All your Todoss on a single App.</h2>
          <div className="addTodos flex justify-center gap-3">
            <input id='length' value={todo} onChange={(e) => { handleChange(e) }} type="text" className='rounded-full px-2 md:px-4 py-1 md:py-2 w-[75%] md:w-[40%]' />
            <button disabled={todo.length <= 5} onClick={handleAdd} className={`text-black font-bold px-8 py-0 rounded-md border-none bg-blue-600 disabled:bg-gray-300`}>Set</button>
          </div>
          <div className="flex justify-center gap-2 m-4">
            <div className="text-center"><button onClick={Finished} className='bg-[#FFE66D] px-2 py-1 rounded-md'>Show Finished</button></div>
            <div className="text-center"><button onClick={NotFinished} className='bg-[#FFE66D] px-2 py-1 rounded-md'>Not Finished</button></div></div>
          <div className="Todoss bg-[#c5dfc5] mt-2  rounded-sm w-[100%] md:w-[80%] mx-auto pb-8">
            <div className="header flex justify-center p-2 items-center text-black w-3/4 mx-auto">
              <div className='px-4 py-2 font-bold'>TodoList</div>
              <div className='font-bold text-xl'>|</div>
              <div className='px-4 py-2 font-bold'>Manager Your Todoss at Once</div>
            </div>
            {Todos.length > 0 ? (
              Todos.map((item, index) => (
                <div key={index} className="maps flex justify-between gap-2 w-4/5 mx-auto md:p-1 py-1 flex-wrap">
                  <div className={`${item.status ? "line-through" : ""} flex justify-center items-center gap-2`}>
                    <input type="checkbox" checked={item.status} onChange={(e) => { handleCheckbox(e, index);}} />
                    <div className={item.status ? "line-through" : ""}>{item.todo}</div>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <button onClick={() => { handleEdit(index) }} className='bg-[#a9aaa6] p-1 rounded-sm hover:bg-blue-500 transition-all border border-[#2F3061]'><MdEdit /></button>
                    <button onClick={() => { handleDelete(index) }} className='bg-[#eb3a3a] p-1 rounded-sm hover:bg-[#FFE66D] transition-all border border-[#2F3061]'><MdDelete /></button>
                  </div>
                </div>
              ))
            ) : (
              <div className='text-center font-bold text-2xl text-blue-600 font-mono animate-pulse'>No todos to Display</div>
            )}


          </div>

        </div>
      </>
    )
  }
  export default App