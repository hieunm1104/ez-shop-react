import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom'
import AlbumFeature from './features/Album/index'
import TodoFeature from './features/Todo/index'
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header />
    
      <Switch>
        <Redirect from='/home' to="/" exact />
        <Redirect from='/post-list/:postId' to="/posts/:postId" exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>
      footer
    </div>
  );
}

export default App;
