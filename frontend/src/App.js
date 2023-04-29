import './App.css';
import Header from './Components/Header';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import ChoiceForOrder from './Pages/ChoiceForOrder';
import ChooseStore from './Pages/ChooseStore';
import OrderText from './Pages/OrderText';
import StatusOrder from './Pages/StatusOrder';
import ContectUs from './ContectUs';

//import rider side
import OrderDetail from './Pages/OrderDetail';
import YourOrder from './Pages/YourOrder';
import ReceiveOrder from './Pages/ReceiveOrder';
import RoutingOrderPage from './Pages/RoutingOrderPage';

const App = () => {
  return (
    <div className="App font-noto">
      <Header />
      {/* <Registration /> */}
      {/* <Login />  */}
      {/* <ChoiceForOrder /> */}
      {/* <ChooseStore /> */}
      {/* <OrderText /> */}
      {/* <OrderDetail /> */}
      {/* <YourOrder /> */}
      <ContectUs/>
      {/* <ReceiveOrder /> */}
      {/* <RoutingOrderPage /> */}
      {/* <StatusOrder /> */}
    </div>
  );
}

export default App;
