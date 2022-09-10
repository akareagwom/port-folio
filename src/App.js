import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Port from './pages/port/Port';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Port/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
