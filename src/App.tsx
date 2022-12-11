import React, { createContext, useState } from 'react';
import './App.css';
import { Main } from './components/Main';
import { Mina } from './components/Mina';
import { Navigation } from './components/Navigation';
import { Projektit } from './components/Projektit';
import { Some } from './components/Some';

export const Context : React.Context<any> = createContext(undefined);

const App : React.FC = () : React.ReactElement => {

    const [vaihda, setVaihda] = useState<string>("1");

    const nakyma = () : any => {

            return (
            <Context.Provider value={{vaihda, setVaihda}}>
                <Navigation/>
                {(vaihda === "1")
                ? <Main/>
                : (vaihda === "2")
                ? <Mina/>
                : (vaihda === "3")
                ? <Projektit/>
                : (vaihda === "4")
                ? <Some/>
                : <></>
                }
            </Context.Provider>)
    }

  return (
        <div>
        <div onClick={() => setVaihda("1")}>
            <div id="text"></div>
        </div>
    
    <div id="wrapper">
        <div id="header">
        {(vaihda === "1")
                ? <h2>Tervetuloa!</h2>
                : (vaihda === "2")
                ? <h2>Tietoja minusta</h2>
                : (vaihda === "3")
                ? <h2>Tekemäni projektit</h2>
                : (vaihda === "4")
                ? <h2>Sosiaalinen media</h2>
                : <></>
                }
        </div>
        
        {nakyma()}
        
        <div id="footer">
            <p>© Petri Nykänen</p>
        </div>
    </div>
    </div>
  );
}

export default App;
