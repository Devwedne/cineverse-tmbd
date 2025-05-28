import React from 'react';
import { CastCard, CastImage } from './styles';

const CastMember = ({ image, name }) => {
  return (
    <CastCard>
      <CastImage image={image} />
      <p className="text-white fw-medium">{name}</p>
    </CastCard>
  );
};

export default CastMember;
