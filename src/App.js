import './App.css';
import Header from './components/header/Header';
import Home from "./components/home/Home"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cart from './components/cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
