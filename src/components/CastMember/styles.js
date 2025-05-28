import styled from "styled-components";

const CastCard = styled.div`
  min-width: 8rem;
  text-align: center;
  background: rgba(71, 36, 38, 0.7);
  border-radius: 1rem;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.10);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  &:hover {
    transform: translateY(-6px) scale(1.04);
    box-shadow: 0 6px 24px 0 rgba(0,0,0,0.18);
    background: rgba(71, 36, 38, 0.85);
  }
`;

const CastImage = styled.div`
  width: 80px;
  height: 80px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.18);
  border: 3px solid #e92932;
  transition: border 0.2s, box-shadow 0.2s;

  ${CastCard}:hover & {
    border: 3px solid #fff;
    box-shadow: 0 4px 16px 0 rgba(233,41,50,0.18);
  }

  @media (min-width: 768px) {
    width: 110px;
    height: 110px;
  }
`;

export { CastCard, CastImage };