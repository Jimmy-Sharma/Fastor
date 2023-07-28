import logo from './logo.svg';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import { Toaster } from 'react-hot-toast';
import Navbar from './Pages/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Toaster />
    </div>
  );
}

export default App;
