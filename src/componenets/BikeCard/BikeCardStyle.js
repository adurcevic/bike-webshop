import styled from "styled-components";

export const BikeCard = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 2px #087f5b;

  &:hover {
    figure {
      box-shadow: 0px 2px 5px #343a40;
    }
    img {
      transform: scale(1.1);
    }
    p {
      color: #087f5b;
    }
  }
`;

export const Figure = styled.figure`
  width: 250px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Title = styled.p`
  font-size: 24px;
  color: #343a40;
  transition: all 0.3s ease-in-out;
`;

export const Price = styled.span`
  font-size: 18px;
  color: #343a40;
  transition: all 0.3s ease-in-out;
  margin-bottom: 12px;
`;