import React, { useState } from "react";
import Input from "./Input.jsx";
import "./Product.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Product = ({ onSaveExpenseData, onShowCart }) => {
  const [formdata, setformdata] = useState({
    medicine_id: "",
    medicine_name: "",
    medicine_description: "",
    medicine_price: "",
    medicine_quantity: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setformdata((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newData = {
      medicine_id: new Date().getTime(),
      medicine_name: formdata.medicine_name,
      medicine_description: formdata.medicine_description,
      medicine_price: formdata.medicine_price,
      medicine_quantity: formdata.medicine_quantity,
    };

    const existingData = JSON.parse(localStorage.getItem("product")) || [];
    if (newData.medicine_quantity > 0) {
      localStorage.setItem(
        "product",
        JSON.stringify([...existingData, newData])
      );
      onSaveExpenseData(newData);
    }

    setformdata({
      medicine_id: "",
      medicine_name: "",
      medicine_description: "",
      medicine_price: "",
      medicine_quantity: "",
    });

    return (
      <>
        <div className="container">
          <div className="left">
            <form className="form-product" onSubmit={onSubmitHandler}>
              <Input
                type="text"
                name="medicine_name"
                value={formdata.medicine_name}
                onChange={onChange}
                id="med_name"
              >
                Medicine Name :
              </Input>
              <Input
                type="text"
                name="medicine_description"
                value={formdata.medicine_description}
                onChange={onChange}
                id="med_desc"
              >
                Description :
              </Input>
              <Input
                type="number"
                name="medicine_price"
                value={formdata.medicine_price}
                onChange={onChange}
                id="med_price"
              >
                Price :
              </Input>
              <Input
                type="number"
                name="medicine_quantity"
                value={formdata.medicine_quantity}
                onChange={onChange}
                id="med_quant"
              >
                Quantity Available :
              </Input>
              <button className="btn" type="submit">
                Add Product
              </button>
            </form>
          </div>

          <div className="right">
            <button className="cartIcon" onClick={onShowCart}>
              <AddShoppingCartIcon />
            </button>
          </div>
        </div>
      </>
    );
  };
};

export default Product;
