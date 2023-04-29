import './App.css';
import Header from './Components/Header';
import ReceiveOrder from './Pages/ReceiveOrder';
import OrderDetail from './Pages/OrderDetail';
import YourOrder from './Pages/YourOrder';
import RoutingOrderPage from './Pages/RoutingOrderPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Rider side Import
import YourOrder from './Pages/YourOrder';
import RoutingOrderPage from './Pages/RoutingOrderPage';
import ReceiveOrder from './Pages/ReceiveOrder';
import OrderDetail from '.Pages/OrderDetail';

const App = () => {
  return (
    <div className="App font-noto">
<<<<<<< Updated upstream
      <Router>
        <Header />  
        <Switch>
          <Route exact path="/receive-order" component={ReceiveOrder} />
          <Route exact path="/order-detail" component={OrderDetail} />
          <Route exact path="/your-order" component={YourOrder} />
          <Route exact path="/" component={RoutingOrderPage} />
        </Switch>
      </Router>
=======
      <Header />
      {/* <Registration /> */}
      {/* <Login />  */}
      {/* <ChoiceForOrder /> */}
      {/* <ChooseStore /> */}
      {/* <OrderText /> */}
      {/* <YourOrder /> */}
      {/* <RoutingOrderPage /> */}
      {/* <ReceiveOrder /> */}
      {/* <OrderDetail /> */}
      <OrderDetail />
>>>>>>> Stashed changes
    </div>
  );
}
  
export default App;
