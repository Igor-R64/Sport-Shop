/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaRubleSign } from 'react-icons/fa';
import PropTypes from 'prop-types';
import "./CardItem.css";

function CardItem(props) {

  const item = props.item;

  const [isDisabled, setDisabled] = useState(false);

  return (
    <Card>
      <img className="card-img" src={item.img} alt="img" />
      <CardBody key={item.id}>
        <CardTitle tag="h5">{item.title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{item.type}</CardSubtitle>
        <CardText>{item.description}</CardText>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{item.price} <FaRubleSign /> </CardSubtitle>
        {isDisabled || props.preOrdered ? (<Link className="link-basket" to='/basket'> Перейти в Корзину </Link>) : (<Button onClick={() => { props.addGoodToBasket(item.id); setDisabled(true) }}>Купить</Button>)}
      </CardBody>
    </Card>
  )
}

CardItem.propTypes = {
  item: PropTypes.string
}
export default CardItem;