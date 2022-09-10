import Main from '../../component/main/Main';
import './port.css';
import folio from '../../images/folio.jpg'
import Work from '../../component/mywork/Work';
import Skills from '../../component/skills/Skills';

const Port = () => {
    return ( 
        <div >
            <div className="port-container">
                <div>
                    <Main/>
                </div>
                <div className='folio'>
                    <img src={folio} style={{height:'300px',width:'300px'}}/>
                </div>
            </div>
            <div>
                <Work/>
            </div>
            <div>
                <Skills/>
            </div>
        </div>
     );
}
 
export default Port;