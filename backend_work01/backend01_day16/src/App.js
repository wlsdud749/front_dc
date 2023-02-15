import './App.css';

import { useDispatch,useSelector } from 'react-redux';
import StateView from './StateView';
import StateController from './StateController';
// 값을 참고할 때 useSelector 사용
// 값을 변경하기 위해선 useDispatch 사용

function App() {
  

  return (
      <div className="App">
      <h1>Hello world</h1>
      <StateView/>
      <StateController/>        
      </div>
  );
}

export default App;