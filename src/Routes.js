import { Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home/Home";
import ProjectDescription from "../src/pages/ProjectDescription/ProjectDescritpion";
import Layout from './components/Layout/Layout';


function App() {
  return (
    <div>
        <BrowserRouter>
        
          <Routes >
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/ProjectDescription/:id' element={<ProjectDescription/>}/>
            
            </Route>
          </Routes>
         
        </BrowserRouter>
    </div>
  );
}

export default App;
