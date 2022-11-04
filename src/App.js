import "./App.css";
import Comments from "./components/Comments/Comments";

const data = 
  {
    id: "1",
    date: new Date(),
    userTitle: "Kitty Cat",
    avatarUrl: "https://placekitten.com/g/64/64",
    userText: 'Learn React is awesome',
  }

function App() {
  return (
    <div className="App">
      <Comments userData = {data}/>
    </div>
  );
}

export default App;
