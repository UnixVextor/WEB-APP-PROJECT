import './App.css';
import Header from './Components/Header';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import ChoiceForOrder from './Pages/ChoiceForOrder';
import ChooseStore from './Pages/ChooseStore';
import OrderText from './Pages/OrderText';
import ReceiveOrder from './Pages/ReceiveOrder';
import OrderDetail from './Pages/OrderDetail';

const App = () => {
  return (
    <div className="App font-noto">
      <Header />
      {/* <Registration /> */}
      {/* <Login /> */}
      {/* <ChoiceForOrder /> */}
      {/* <ChooseStore /> */}
      {/* <ReceiveOrder/> */}
      {/* <OrderDetail/> */}
      <OrderDetail />
    </div>
  );
}

export default App;
