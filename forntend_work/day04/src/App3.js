import React, { useState } from 'react';
import "./App.css";

function ItemRow({ item }) {
  return (
    <li>
      <p>
        <input type="checkbox" />
        <input type="text" value={item.title} disabled />
        <button>삭제</button>
      </p>
      {/* p태그 하나의 문단을 만들 때 사용 */}
    </li>
  );
}

function InputItem() {
  const [newWork, setNewWork] = useState();
  return (
    <div>
      할일 : 
      <input 
      type="text" 
      value={newWork} 
      onChange={(e)=>{
        setNewWork(e.target.value);
        console.log(e.target.value);
      }}  />
      <button>추가</button>
    </div>
  )
}
function TodoList({ todoList }) {
  return (
    <div>
      <ul>{
        todoList.map((item, idx) => {
          return <ItemRow key={item.no} item={item} />;
          // 코드는 뒤에서부터 읽자 (괄호별)
        })}
      </ul>
    </div>
  );
}
let noCount = 5;
function App(props) {
  const [newWork, setNewWork] = useState();
  const [todoList, setTodoList] = useState([
    { no: 1, title: "점심 먹기", done: false },
    { no: 2, title: "산책 먹기", done: false },
    { no: 3, title: "복습 하기", done: false },
    { no: 4, title: "내일 수업 예습하기", done: false },
  ]);
  // 비동기 때문에 쓴디 - 성민
  const [noCount,setNoCount] = useState(5);
  
  
  //추가부분
  function appendItem(newItem) {
    console.log(noCount);
    setTodoList(...todoList, { no: noCount++, title: newItem, done: false });
    setNoCount(noCount+1);
  }
  
  function removdItem(no) {
    var newList = todoList.filter((item,idx)=>{
      return item.no !=no;
    });
    setTodoList(newList);
  }

  return (
    <>
      <h1>Todo List</h1>
      <div>
        {/* <li>
        <input type="checkbox" />
        <input type="text" value="아침먹기" disabled/>
        <button>삭제</button>
      </li>
      > 함수 선언하여 사용하자 */}
        <InputItem appendItem={appendItem}/>
        <hr />
        <TodoList todoList={todoList} />
        <removdItem removdItem={removdItem} />
      </div>

    </>
  );
}

export default App;