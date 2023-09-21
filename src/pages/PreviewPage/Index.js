import { linkContext } from "../../Context/linkContext";
import { useContext } from "react";
import './index.css'
import { Link } from 'react-router-dom';
import {hexToRgb, isLight} from "../../utils"
function PreviewPage() {
  const { data, linkTypes } = useContext(linkContext);
    return (
      <div className="previewpage"> 
      <div className="previewtop">
      <ul className="button">
        <li> <button style={{width:"150px" }}> <Link to ="/links" style={{textDecoration:"none", color:"black"}}> Back to Editor</Link> </button></li>
        <li> <button style={{backgroundColor:"#623cff", color:"white"}}>ShareLink </button></li>
      </ul>
      </div>
      <div className='profiledetails'>
      {data.avatar && <img src={data.avatar} alt='avatar' style={{
  
                borderRadius: "50%",
                height: "100px",
                width: "100px",
                border: "Black solid 0.4px",
                backgroundColor: "none",
                marginTop: "30px"
            }} />}

          <p>{data.name}</p>
          <p>{data.email}</p>
          
            <div className="link" style={{ height: 240, width: 300, overflowY: `scroll`, alignItems:"center", top: "50px"}}>
                {data.links.map((link) => {
                    const type = linkTypes.find((linkType) => linkType.id === link.typeId)
                    const bgRGB = hexToRgb(type.bg)
                    return (<div style={{
                        backgroundColor: type.bg,
                        display:   `flex`,
                        color: !isLight(bgRGB.r, bgRGB.g, bgRGB.b) ? 'black': 'white',
                        width: 237,
                        height: 44,
                        border:!isLight(bgRGB.r, bgRGB.g, bgRGB.b) ? '1px black solid ': 'none',
                        borderRadius: 10,
                        margin: '15px 0px',
                        textAlign: `center`,
                        justifyContent: `center`,
                        alignItems:`center`,
                    

                    }}><p style={{
                      marginRight:"10px"
                  }}>{type.icon}</p>
                      <p>{type.name}</p>
                      </div>)
             
                })}
            </div>
        
      </div>
      </div>
    );
  }
  
  export default PreviewPage;