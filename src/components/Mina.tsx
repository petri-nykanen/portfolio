import React from 'react'

export const Mina : React.FC = () : React.ReactElement => {
  return (
    <>    
          <div id="content">
            <div id="col" style={{textShadow:"1.5px 1.5px 1.5px black"}}>

                <h2 className="t1">Kuka olen?</h2>
                <p className="t1">Olen Petri Nykänen, 29-vuotias mies Mikkelistä. </p>
                <h2 className="t2">Mitä teen?</h2>
                <p className="t2">Opiskelen kirjoitushetkellä viimeistä vuotta tietojenkäsittelyn tradenomiksi. Tätä ennen olen työskennellyt <a style={{color:"cyan"}} href="https://www.essote.fi/">Essotella</a> sairaala-apteekissa lähettinä ja potilasasiakirjakeskuksessa arkistotyöntekijänä. Minulla on myös merkonomin ammattitutkinto taloushallinnosta vuodelta 2012.</p>
                <h2 className="t3">Miten vietän vapaa-aikani?</h2>
                <p className="t3">Päiväni kuluvat enimmäkseen kotona pelien tai kirjoittamisen ääressä, usein käyn myös kuntosalilla. </p>
                <h2 className="t4">Mistä minut voi tavoittaa?</h2>
                
                <p className="t4">
                Minulle voi soittaa, lähettää viestiä tai sähköpostia.<br/>
                Puhelin: +358505355193<br/>
                Sähköposti: petri.nykaenen@gmail.com<br/>
                Minut voi tavoittaa myös käyttämistäni sosiaalisista medioista. Ne löytyvät valikosta "Sosiaalinen media".
                </p>
            </div>
            <img style={{float:"left"}} src={"https://petri-nykanen.github.io/portfolio/images/mina.png"}/>
        </div>
  </>
  )
}
