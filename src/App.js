import logo from './logo.svg';
import './App.css';

function App() {

  let post = '오늘의 일기 작성';

  return (
    <div className="App">
      <div className="black-nav">
        <h4>
          블로그일꺼야
        </h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
