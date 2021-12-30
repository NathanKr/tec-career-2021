import './App.css'
import {useState} from 'react'
import ShowUnmount from './components/ShowUnmount'

function App() {
  const [show,setShow] = useState(true);

  return (
    <div onClick={() => setShow(!show)} className='App'>
      <h2>click to show\unshow ShowUnmount --&gt; check console</h2>
      {show ? <ShowUnmount/> : ''}
    </div>
  );
}

export default App;