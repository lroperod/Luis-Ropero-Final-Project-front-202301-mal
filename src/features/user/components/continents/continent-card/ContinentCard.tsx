import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Continent } from '../../../../../shared/data/continent';
import {
  ButtonContinentStyled,
  CardContainer,
  ImageContinentStyled,
  TitleContinentStyled,
} from './ContinentCardStyled';

const ContinentCard: FC<Continent> = ({ imageURL, nameContinent, alt }) => {
  return (
    <CardContainer>
      <TitleContinentStyled>{nameContinent}</TitleContinentStyled>
      <ImageContinentStyled>
        {<img src={imageURL} alt={alt}></img>}
      </ImageContinentStyled>
      <Link to={'/travel'} style={{ textDecoration: 'none' }}>
        <ButtonContinentStyled>Book now</ButtonContinentStyled>
      </Link>
    </CardContainer>
  );
};

export default ContinentCard;
