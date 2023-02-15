import { useEffect, useState } from "react";
import axios from "axios";
import Test from "./test";

function App() {
  const [saramList, setSaramList] = useState([]);
  // 여기서 saramList 는 스테이트라고 한다?
  // setSaramList 는 setter ??

  // useEffect 라는 훅?
  useEffect(() => {

    // axios 모듈을 활용한 Ajax 처리
    axios.get("http://localhost:5000/car").then((response) => {
      setSaramList(response.data);
    });
  }, []);

  return (

    // html 처럼 보이지만 JSX 이다. 
    // {여기에 자바스크립트 문법 써} 안에 넣으면 됨
    <div>
      <h1>길동이의 홈페이지</h1>
      <Test></Test>
      <ul>
        {
          saramList.map((saram) => {
            return <li key={saram.no}>{saram.name},{saram.company},{saram.year}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;