import React from 'react';
import ListItem from './ListItem';

const List = ({ cowList }) => {
  const item = cowList.map((cow) => {
    return (
      <div key={cow.id}>
        <ListItem name={cow.name} description={cow.description} />
      </div>
    );
  });

  return <div>{item}</div>;
};

export default List;
