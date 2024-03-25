import { Redirect, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import ProductFeature from './features/Product';
import CartFeature from './features/Cart';
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect from='/home' to="/" exact />
        <Redirect from='/post-list/:postId' to="/posts/:postId" exact />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />
      </Switch>
    </div>
  );
}

export default App;
