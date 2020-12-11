import React from 'react';

const Item = function({ title, description }) {
  return (
    <>
      <li>{title} &mdash; {description}</li>
    </>
  );
}

export default Item;