import {useState} from 'react';
import Reddit from './Reddit'

function App() {
  // 2 pieces of state: one to hold the input value,
  // another to hold the current subreddit.
  const [inputValue, setValue] = useState("reactjs");
  const [subreddit, setSubreddit] = useState(inputValue);

  // Update the subreddit when the user presses enter
  const handleSubmit = e => {
    e.preventDefault();
    setSubreddit(inputValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={e => setValue(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
      <Reddit subreddit={subreddit} />
    </>
  );
}

export default App;