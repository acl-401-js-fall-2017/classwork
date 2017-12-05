import React from 'react';

export default ({ loading }) => {
  if(!loading) return null;
  return (
    <div className="loader">
      Loading...
    </div>
  );
};