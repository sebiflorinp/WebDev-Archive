import Header from "./components/Header.jsx";
import MobileMenuBar from "./components/MobileMenuBar.jsx";

function App() {
  return (
    <div className="lg:grid lg:grid-cols-5">
      <Header />
      <MobileMenuBar />
    </div>
  );
}

export default App;
