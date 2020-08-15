import React from 'react'
 import Cmp from './Cmp';


const App =() => {
    return(
     <>     
     <br/>
            <h2 align="center">HOTSTAR MOVIES</h2>
            <div className ="row">
            <div className="col-sm-4">
            <Cmp title='BLACK PANTHER'
                    imgsrc='black.jpeg'
                    info='After his fathers death TChalla returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.'
                    link='https://www.hotstar.com/in/movies/black-panther/1660010672'

            />
            </div>
            <div className="col-sm-4">
            <Cmp title='AVENGERS AGE OF ULTRON'
                imgsrc='ultron.jpeg'
                info='Tony Stark builds an artificial intelligence system named Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe out the human race, the Avengers set out to stop him.'
                link='https://www.hotstar.com/in/movies/avengers-age-of-ultron/1260018315'
            />
            </div>

            <div className="col-sm-4">
            <Cmp title='Thor: The Dark World'
                imgsrc='thor.jpeg'
                info='Thor sets out on a journey to defeat Malekith, the leader of the Dark Elves when he returns to Asgard to retrieve a dangerous weapon and fulfill his desire of destroying the Nine Realms.'
                link='https://www.hotstar.com/in/movies/thor-the-dark-world/1260018142'
            />
            </div>
            </div>
            
     </>)
}

export default App;
