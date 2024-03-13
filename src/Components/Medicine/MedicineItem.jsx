import React, { useContext } from "react";
import MedicineForm from "./MedicineForm";
import classes from "./MedicineItem.module.css";
import CartContext from "../Store/cart-context";

const MedicineItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    if (props.quantity >= amount && props.quantity > 0) {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
        quantity: props.quantity,
      });

      // Update the available quantity

      props.updateQuantity(props.id, amount);
    }
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>
          {" "}
          Description : {props.id} {props.description}
        </div>
        <div className={classes.price}>
          {" "}
          price : {props.price} Quantity Available : {props.quantity}
        </div>
      </div>
      <div>
        {props.quantity > 0 ? (
          <MedicineForm onAddToCart={addToCartHandler} />
        ) : (
          <button className={classes.outOfStockButton}>Out of Stock</button>
        )}
      </div>
    </li>
  );
};

export default MedicineItem;
