import React from "react";
// 리스트 스타일
const listStyle = {
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    TextDecoration: "none",
};
const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
};
// 할일 목록 배열에다가 저장
const todoList = [
    { id: "1", title: "공부하기", completed: true },
    { id: "2", title: "청소하기", completed: false },
];
export default function App() {
    return (
        <div className="container">
            <div className="todoBlock">
                <div className="title">
                    <h1>To Do List</h1>
                </div>
                {/* 2.map()메소드를 이용해 배열내에 요소를 호출한 결과를 모아 새로운 배열로 반환 */}
                {todoList.map((data) => (
                    <div style={listStyle} key={data.id}>
                        <input type="checkbox" defaultChecked={false} />
                        {data.title}
                        <button style={btnStyle}>X</button>
                    </div>
                ))}
                {/* 리스트 작성 */}
                <div style={listStyle}>
                    <input type="checkbox" defaultChecked={false} />
                    공부하기
                    <button style={btnStyle}>X</button>
                </div>
                <div style={listStyle}>
                    <input type="checkbox" defaultChecked={false} />
                    청소하기
                    <button style={btnStyle}>X</button>
                </div>
            </div>
        </div>
    );
}
