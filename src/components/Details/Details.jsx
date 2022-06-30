import React, { useContext, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { productsContext } from "../../contexts/productsContext";

import Loader from "../Loader/Loader";

const Details = () => {
  const { id } = useParams();
  const { oneProduct, getOneProduct } = useContext(productsContext);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  return oneProduct ? (
    <Container>
      <Box>
        <Typography variant="h4">{oneProduct.title}</Typography>
        <Typography variant="h5">{oneProduct.description}</Typography>
        <Typography variant="h4">{oneProduct.price}</Typography>
        <img src={oneProduct.image} width="50%" alt="product" />
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default Details;
