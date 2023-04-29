import './App.css';
import Header from './Components/Header';
<<<<<<< HEAD
import Registration from './Registration';
import Login from './Login';
import ChoiceForOrder from './ChoiceForOrder';
import ChooseStore from './ChooseStore';
import Home from './Home';
import MenuTechNoInter from './MenuTechNoInter';
import MenuPaSri from './MenuPaSri';
import MenuINhauy from './MenuINhauy';
import MenuMaMa from './MenuMaMa';
import MenuNaRong from './MenuNaRong';
import MenuBillion from './MenuBillion';
import MenuItList from './MenuItList';
import MenuIYen from './MenuIYen';
import MenuPFon from './MenuPFon';
import MenuOChaNa from './MenuOChaNa';
import MenuCurry from './MenuCurry';

=======
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import ChoiceForOrder from './Pages/ChoiceForOrder';
import ChooseStore from './Pages/ChooseStore';
import OrderText from './Pages/OrderText';
import StatusOrder from './Pages/StatusOrder';

//import rider side
import OrderDetail from './Pages/OrderDetail';
import YourOrder from './Pages/YourOrder';
import ReceiveOrder from './Pages/ReceiveOrder';
import RoutingOrderPage from './Pages/RoutingOrderPage';

>>>>>>> 6e40ee023fa54f866437f2ab3834933767ed701c
const App = () => {
  return (
    <div className="App font-noto">
      <Header />
      {/* <Registration /> */}
<<<<<<< HEAD
      {/* <Login /> */}
      {/* <ChoiceForOrder /> */}
      {/* <ChooseStore /> */}
      {/* <ชื่อไฟล์></> */}
      <Home/>
      <MenuTechNoInter/>
      <MenuPaSri/>
      <MenuINhauy/>
      <MenuMaMa/>
      <MenuNaRong/>
      <MenuBillion/>
      <MenuItList/>
      <MenuIYen/>
      <MenuPFon/>
      <MenuOChaNa/>
      <MenuCurry/>
=======
      {/* <Login />  */}
      {/* <ChoiceForOrder /> */}
      {/* <ChooseStore /> */}
      {/* <OrderText /> */}
      {/* <OrderDetail /> */}
      {/* <YourOrder /> */}
      {/* <ReceiveOrder /> */}
      {/* <RoutingOrderPage /> */}
      <StatusOrder />
>>>>>>> 6e40ee023fa54f866437f2ab3834933767ed701c
    </div>
  );
}

export default App;
