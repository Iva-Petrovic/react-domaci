import logo from './logo.svg';
import './App.css';

import {Glavna} from "./components/layout/pages/Glavna";
import {Greska} from "./components/layout/pages/Greska";
import {ONama} from "./components/layout/pages/ONama";
import {Bottom} from "./components/layout/Bottom";
import {Navbar} from "./components/layout/Navbar";

import {Route, Routes} from "react-router-dom";

function App(){


    return(

      <div>

        <Navbar />

        <Routes>

          <Route path="/" element={<Glavna/>} />
          <Route path="/onama" element={<ONama/>} />
          <Route element={<Greska/>} />

        </Routes>

        <Bottom />


      </div>
    );


}

export default App;