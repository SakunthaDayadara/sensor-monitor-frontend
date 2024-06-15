import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Login from "./Login/Login";
import RequireAuth from "./Util/RequireAuth";
import Register from "./Register/Register";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route element={<RequireAuth />}>
                    <Route path='/dashboard' element={<Dashboard />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
