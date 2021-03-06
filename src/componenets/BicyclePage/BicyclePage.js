import React from "react";
import { useContext } from "react";
import {
  Container,
  Figure,
  Img,
  Content,
  Flex,
  Name,
  Description,
  Price,
  ButtonContainer,
} from "./BicyclePageStyle";
import { Button } from "../../lib/style/generalStyle";
import { useNavigate } from "react-router-dom";
import { FasterCartContext } from "../../context/FasterCartContext";

const BicyclePage = ({
  imgSrc,
  bikeTitle,
  bikeDescription,
  bikePrice,
  bicycleId,
}) => {
  const { fasterCart, setFasterCart } = useContext(FasterCartContext);
  let navigate = useNavigate();

  const handleAddItemsToCart = (
    bicycleId,
    quantity,
    imgSrc,
    bikeTitle,
    bikePrice,
    fasterCart
  ) => {
    const cartData = {
      bicycleId: bicycleId,
      quantity: quantity,
      imgSrc: imgSrc,
      bikeTitle: bikeTitle,
      bikePrice: bikePrice,
    };

    if (fasterCart.length === 0) {
      setFasterCart((prevArray) => [...prevArray, cartData]);
    } else if (
      fasterCart.length > 0 &&
      fasterCart.every((cur) => cur.bicycleId !== bicycleId)
    ) {
      setFasterCart((prevArray) => [...prevArray, cartData]);
    } else if (fasterCart.some((cur) => cur.bicycleId === bicycleId)) {
      fasterCart.find((cur) => cur.bicycleId === bicycleId && cur.quantity++);
      const newArray = fasterCart.slice(0);
      setFasterCart(newArray);
    }
  };

  return (
    <Container>
      <Figure>
        <Img src={imgSrc} alt={bikeDescription} />
      </Figure>
      <Content>
        <Flex>
          <Name>{bikeTitle}</Name>
        </Flex>
        <Description dangerouslySetInnerHTML={{ __html: bikeDescription }} />
        <Price>Price: {bikePrice}</Price>
        <ButtonContainer>
          <Button isFixed onClick={() => navigate(-1)}>
            Return
          </Button>
          <Button
            isFixed
            isOutline
            onClick={() =>
              handleAddItemsToCart(
                bicycleId,
                1,
                imgSrc,
                bikeTitle,
                bikePrice,
                fasterCart
              )
            }
          >
            Add to Cart
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default BicyclePage;
