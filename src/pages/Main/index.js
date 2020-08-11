import React, { useEffect, useState } from 'react';

import Layout from '../../components/Layout';

import CategoryCard from '../../components/CategoryCard';
import { DivCategories } from './styles';

import api from '../../services/api';

const Main = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    api.get('categories').then((response) => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('categories/1').then((response) => {
      setSubCategories(response.data);
    });
  }, []);

  return (
    <>
      <Layout>
        <DivCategories>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              subCategories={subCategories}
            />
          ))}
        </DivCategories>
      </Layout>
    </>
  );
};

export default Main;
