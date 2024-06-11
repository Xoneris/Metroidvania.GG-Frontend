import { BrowserRouter} from 'react-router-dom';
import Homepage from './homepage/Homepage';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

  return (
    <>
      {/* <Analytics/>
      <SpeedInsights/> */}
      
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Homepage />
      </BrowserRouter>
    </>
  )
}

export default App;
