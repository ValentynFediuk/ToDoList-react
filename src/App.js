import React, {useState} from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState("")
    const [todos, setTodos] = useState([])
    const submitTodoHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div className="App">
            <header>
                <h1>Todo list</h1>
            </header>
            <Form
                onClick={submitTodoHandler}
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
            />
            <TodoList setTodos={setTodos} todos={todos}/>
        </div>
    )
}

export default App