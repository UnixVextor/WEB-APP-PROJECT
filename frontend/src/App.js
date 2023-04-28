import './App.css';
import Header from './Components/Header';
import Registration from './Registration';
import Login from './Login';
import ChoiceForOrder from './ChoiceForOrder';
import ChooseStore from './ChooseStore';
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

const App = () => {
  return (
    <div className="App font-noto">
      <Header />
      {/* <Registration /> */}
      {/* <Login /> */}
      {/* <ChoiceForOrder /> */}
      {/* <ChooseStore /> */}
      {/* <ชื่อไฟล์></> */}
      {/* <Home/> */}
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
    </div>
  );
}

export default App;
