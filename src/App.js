import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Button from './components/Button';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
       <Button />
       <br></br>
       <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
