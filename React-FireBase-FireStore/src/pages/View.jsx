import React from 'react';
import { Link } from 'react-router-dom';

function View() {

  return (
    <div align="center">
      <h1>View User</h1>
    
       

      <hr />
      <Link to={'/add'}>Add</Link>
    </div>
  );
}

export default View;
