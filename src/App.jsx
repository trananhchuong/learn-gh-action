import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <div>
      <header>
        <div id="logo-img">
          <img src={logo} allt="logo" />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
    </div>
  );
}

export default App;
