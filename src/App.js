import { BrowserRouter} from 'react-router-dom';
import Homepage from './homepage/Homepage';

function App() {

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Homepage />
      </BrowserRouter>
    </>
  )
}

export default App;
