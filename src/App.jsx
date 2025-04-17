import { BrowserRouter ,Routes,Route} from "react-router-dom"

import SignUp from "./signUp"
import SignIn from "./signIn"
import Home from "./Home"
import AboutUs from "./AboutUs"


const App =()=>(
  <BrowserRouter>
<Routes>
<Route path="/" element={<SignUp />} />
<Route path="/signup" element={<SignUp />} />
<Route path="/signin" element={<SignIn />} />
<Route path="/Home" element={<Home />} />
<Route path="/aboutUs" element={<AboutUs/>}/>
</Routes>
  </BrowserRouter>
)


export default App