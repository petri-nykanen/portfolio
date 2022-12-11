import React, { useContext } from 'react'
import { Context } from '../App'

export const Navigation : React.FC = () : React.ReactElement => {
    
    const { vaihda, setVaihda } = useContext(Context)

  return (
    <div id="nav">
    <ul>
        <li id="a">
                <i onClick={() => setVaihda("2")} className="fas fa-user"></i>
        </li>
        <li id="b">
                <i onClick={() => setVaihda("3")} className="fas fa-file"></i>
        </li>
        <li id="c">
                <i onClick={() => setVaihda("4")} className="fas fa-address-book"></i>
        </li>
    </ul>
</div>
  )
}
