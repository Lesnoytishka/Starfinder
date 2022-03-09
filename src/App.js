import './App.css';
import WeaponSimpleMelee from "./components/weapon/meleeSimple/WeaponSimpleMelee";
import HexBackground from "./components/coolBackground/HexBackground";
import CircleToggle from "./components/circleToggle/CircleToggle";

function App() {
  return (
    <div className="App">
      <HexBackground />
      <WeaponSimpleMelee />
    </div>
  );
}

export default App;
