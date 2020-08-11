import React, { useEffect, useState } from 'react';

import CategoryCard from '../../components/CategoryCard';
import { DivCategories } from './styles';

import api from '../../services/api';

const Main = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get('categories').then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <DivCategories>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </DivCategories>
  );
};

export default Main;
