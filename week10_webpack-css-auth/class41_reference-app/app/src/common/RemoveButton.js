import React from 'react';

const PROMPT = 'Are you sure you want to remove this item?';

export default ({ onRemove }) => (
  <button onClick={() => {
    if(window.confirm(PROMPT)) onRemove();
  }}>🗑</button>
);