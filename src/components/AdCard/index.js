import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import hair from '../../assets/hair.jpg';

import {
  AdStyle,
  ImageStyle,
  DescriptionStyle,
  PriceStyle,
  DivBttonsStyle,
  DetailsStyle,
} from './styles';

const AdCard = ({ ad }) => {
  const formatedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(ad.price);

  return (
    <AdStyle>
      <ImageStyle src={hair} />
      <DescriptionStyle>{ad.title}</DescriptionStyle>
      <PriceStyle>{formatedPrice}</PriceStyle>
      <Link to={`/ad/${ad.id}`}>
        <DivBttonsStyle>
          <DetailsStyle>Ver Detalhes</DetailsStyle>
        </DivBttonsStyle>
      </Link>
    </AdStyle>
  );
};

AdCard.propTypes = {
  ad: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AdCard;
