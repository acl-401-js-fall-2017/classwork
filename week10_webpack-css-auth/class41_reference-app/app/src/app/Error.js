import React from 'react';

export default ({ error }) => {
  if(!error) return null;
  return (
    <div className="error">
      {Array.isArray(error) 
        ? <ul>error.map(err => <li>err</li>)</ul>
        : error.error ? error.error : error
      }
    </div>
  );
};