import React from 'react';

import { CategoryStyle } from './styles';

function CategoryCard({ category }) {
  return (
    <CategoryStyle>
      <h2>{category.title}</h2>
    </CategoryStyle>
  );
}

export default CategoryCard;
