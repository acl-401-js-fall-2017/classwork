import React from 'react';

export default function Room({ player, onDrop }) {
  return (
    <div>
      <h6>{player.name}</h6>
      <h6>
        {player.inventory.map((item, i) => {
          return (
            <button key={item} onClick={() => onDrop(item)}>
              {item}
            </button>
          );
        })}
      </h6>
    </div>
  );
}