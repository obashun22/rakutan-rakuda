// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./views/pages/Index.js";
import Post from "./views/pages/Post.js";
import Request from "./views/pages/Request.js";
import Admin from "./views/pages/Admin.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={ Home }/>
        <Route path='/Post' component={ Post }/>
        <Route path='/Request' component={ Request }/>
        <Route path='/Admin' component={ Admin }/>
      </Router>
    </div>
  );
}

export default App;
