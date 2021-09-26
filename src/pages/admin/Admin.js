import { useState } from "react";
import {
  Box,
  Container,
  Title,
  InputText,
  InputNumber,
  Label,
  Button,
  TextArea,
  Form,
  ErrorMessage,
} from "./adminStyles";

const Admin = () => {
  const [errMsg, setErrmsg] = useState(false);

  const formSubmitted = (e) => {
    e.preventDefault();
    const formData = {
      title: e.target[0].value,
      description: e.target[1].value,
      quantity: e.target[2].value,
      price: e.target[3].value,
      image: e.target[4].value,
    };
  };
  return (
    <Box>
      <Container>
        <Title>Creat a Product</Title>
        <Form onSubmit={formSubmitted}>
          {errMsg ? <ErrorMessage id="errorMessage"></ErrorMessage> : ""}
          <Label htmlFor="title">Product Title</Label>
          <InputText type="text" id="title" name="title" />
          <Label htmlFor="description">Product Description</Label>
          <TextArea type="text" id="description" />
          <Label htmlFor="quantity">Quantity</Label>
          <InputNumber type="number" min="0" id="quantity" />
          <Label htmlFor="price">Price</Label>
          <InputNumber type="number" min="0" id="price" />
          <Label htmlFor="imageURL">Image URL</Label>
          <InputText type="text" id="imageURL" />
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </Box>
  );
};

export default Admin;
