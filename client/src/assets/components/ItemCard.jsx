import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useCart } from "react-use-cart";
import FormDialog from "./FormDialog";

const ItemCard = ({ id, name, image, price, rating, description }) => {
  const { addItem } = useCart();
  const [hover, setHover] = useState("inActive");

const handleAddToCart = () => {
  addItem({
    id: id,
    itemId: id, 
    name,
    price,
    image
  });
  window.location.href = "/cart"
};



  const renderStars = (rating) => {
    const roundedRating = Math.round(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < roundedRating ? "text-yellow-500" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return <span>{stars}</span>;
  };

  return (
    <Card
      className="shadow-lg m-2 p-4 flex flex-col gap-2 rounded-lg w-full"
      onMouseOver={() => setHover("active")}
      onMouseOut={() => setHover("inActive")}
    >
      <Card.Img
        variant="top"
        src={image}
        className={`rounded-lg object-cover h-48 ${
          hover === "active" ? "scale-[1.05] overflow-hidden" : ""
        } duration-300`}
      />
      <Card.Body className="p-2">
        <Card.Title className="text-lg sm:text-xl font-semibold">
          {name}
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="flex justify-between items-center">
          <span className="font-bold">{price} $</span>
          <span>{renderStars(rating)}</span>
        </ListGroup.Item>
        <ListGroup.Item className="text-sm">{description}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="flex justify-between items-center text-white font-medium">
        <button
          className="bg-[tomato] p-[12px] rounded-md"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

      </Card.Body>
    </Card>
  );
};

export default ItemCard;
