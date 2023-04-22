import {Image} from 'react-bootstrap'
import Profil from './Profil';


function Header(){
  return(
      <div style={{backgroundColor:"#FFDB58"}}>
          <div className="text-center">
             <Profil style={{ width: 80, height: 80 ,shape: "rounded-circle"}} />
              <h2>Majda Boutayeb</h2>
              <h4>Etudiante En 4ème Année IIR</h4>
            </div>
      </div>
        
        
        );
    }
    
export default Header;