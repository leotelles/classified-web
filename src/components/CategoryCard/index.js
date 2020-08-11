import React from 'react';

import { CategoryStyle } from './styles';

function CategoryCard({ category, subCategories }) {
  return (
    <CategoryStyle>
      <h2>{category.title}</h2>

      {subCategories.map((sub) => (
        <p>{sub.title}</p>
      ))}
    </CategoryStyle>
  );
}

export default CategoryCard;
