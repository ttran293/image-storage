import React from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = React.useState(null);

  React.useEffect(()=>{
    fetch('/api')
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
  })
  return (
    <div className="App">
      <header className="App-header">
        {message && <p>This is the message from the Backend: {message}</p>}
      </header>
    </div>
  );
}

export default App;
