import React, { useState } from "react";
import Lists from "./components/Lists";
import Form from "./components/Form";
export default function App() {
    const [todoList, setTodoList] = useState([]);
    const [value, setValue] = useState("");
    const btnSubmit = (e) => {
        e.preventDefault(); //리로딩해서 다사라지는것을 막기위해 사용(입력버튼 클릭시 새로고침 방지)

        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false,
        };
        setTodoList((prev) => [...prev, newTodo]);
        setValue(""); // 할일 목록이 추가되고 플래이스홀더가바뀌는데 안바뀌게 만들어줌
    };
    const deleteAll = () => {
        setTodoList([]);
    };
    return (
        <div className="container">
            <div className="todoBlock">
                <div className="title">
                    <h1>To Do List</h1>
                    <button className="deleteBtn" onClick={deleteAll}>
                        Delete All
                    </button>
                </div>
                <Lists todoList={todoList} setTodoList={setTodoList} />
                <Form value={value} setValue={setValue} btnSubmit={btnSubmit} />
            </div>
        </div>
    );
}
