import './main.css'
import port from '../../images/port.jpg'
import wee from '../../images/wee.jpg'

const Main = () => {
    return (  
        <div className="main-container">
            <div className="main">
                <h2>Akare Azikang Agwom</h2>
                <h1>Front-End Developer</h1>
                <p>I am an enthusiastic Developer that is obsessed with growth</p>
                <img src={wee}/>
                <img src={port} style={{width:'450px'}}/>
                
                
            </div>
        </div>
    );
}
 
export default Main;