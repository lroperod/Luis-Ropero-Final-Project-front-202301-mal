import React, { FC } from 'react';
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
      <ButtonContinentStyled>Detail</ButtonContinentStyled>
    </CardContainer>
  );
};

export default ContinentCard;
