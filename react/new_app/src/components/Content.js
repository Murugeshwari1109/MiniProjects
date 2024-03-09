// Content.js
import React from 'react';
import ListItems from './ListItems';

const Content = ({ items }) => {
  return (
      <ul>
        {items.map((item) => (
          <ListItems key={item.id} item={item}/>
        ))}
      </ul> 
  );
};

export default Content;
