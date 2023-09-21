import React, { useContext, useState } from 'react';
import './index.css';
import { linkContext } from '../../Context/linkContext';
import InputLink from '../InputLink'
import { v4 as uuid } from 'uuid';

const AddLink = () => {
  const { addLink, data } = useContext(linkContext)

  return (
    <div className="addlink">
      <h2>Customize your links</h2>
      <p style={{ margin: 0 }}>Add/edit/remove links below and then share all your profiles with the world!</p>
      <button style={{ 
          width: '100%',
          margin: 0,
          marginTop: 20,
          cursor: `pointer`,
          backgroundColor: 'transparent',
          color: `#623cff`,
          padding: 10
         }}onClick={()=> addLink({id:uuid() ,url:"", typeId:0})}>+ Add new link</button>
      <div className="link-form">
        {data.links.map((link, index) => (<InputLink linkTypeId={link.typeId} url={link.url}  linkId={index+1} id={link.id}/>))}
      </div>
    </div >
  );
};

export default AddLink;
