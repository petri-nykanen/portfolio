import React, { useContext } from 'react'
import { Context } from '../App'

export const Main : React.FC = () : React.ReactElement => {

  const { vaihda } = useContext(Context)

  return (
    <div id="content">
    <p className="fade">
    </p>
    <div style={{textAlign:"center", display:"flex"}}>
      <img style={{width:"50%", margin:"auto", textAlign:"center", border:"1px solid cyan", boxShadow:"1.5px 1.5px 1.5px black"}} src={"https://petri-nykanen.github.io/portfolio/images/1.jpg"}/>
    </div>
    <h2 className="fade" style={{textAlign:"center", textShadow:"1.5px 1.5px 1.5px black"}}>
      Tradenomi, tietojenkäsittely
      <br/>
      Merkonomi, taloushallinto
      <br/>
      Web-kehittäjä
    </h2>
</div>
  )
}
