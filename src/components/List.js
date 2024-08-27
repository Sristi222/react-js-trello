import React from 'react';
import Card from './Card';

const List = ({ list }) => {
  return (
    <div className="list">
      <h3>{list.title}</h3>
      {list.cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
      <button className="add-card">+ Add a card</button>
    </div>
  );
};

export default List;
