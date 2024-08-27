import React, { useState } from 'react';
import './Board.css';

const Board = () => {
    const [lists, setLists] = useState([
        { title: 'To do', cards: ['Project Description 1'] },
        { title: 'In Progress', cards: ['Project Description 2'] },
        { title: 'Done', cards: ['Project Description 3'] },
    ]);

    return (
        <div className="board">
            {lists.map((list, index) => (
                <div key={index} className="list">
                    <h3>{list.title}</h3>
                    {list.cards.map((card, i) => (
                        <div key={i} className="card">
                            {card}
                        </div>
                    ))}
                    <button className="add-card">+ Add a card</button>
                </div>
            ))}
            <button className="add-list">+ Add a list</button>
        </div>
    );
};

export default Board;
