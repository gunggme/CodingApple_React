/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [text, setText] = useState(['남자코트 추천', '강남 우동맛짐', '리액트 독학'])
  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>
          React Velog
        </h4>
      </div>
      <div className='list'>
        <h4>{ text[0] } <span onClick={ ()=>{setLike(like+1)}  }>👍</span> {like} </h4>
        <p>8월 28일 발행</p>
      </div>
      <div className='list'>
        <h4>{ text[1] }</h4>
        <p>8월 28일 발행</p>
      </div>
      <div className='list'>
        <h4>{ text[2] }</h4>
        <p>8월 28일 발행</p>
      </div>

      <Modal></Modal>
    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
