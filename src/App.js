import React, { useState, useEffect } from "react";
import Product from "./Components/Product/Product.jsx";
import Card from "./Components/UI/Card.jsx";
import MedicineItem from "./Components/Medicine/MedicineItem.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    // Fetch data from local storage when the component is mounted
    const storedData = JSON.parse(localStorage.getItem("product")) || [];
    setExpenses(storedData);
  }, []);

  const saveExpenseData = (data) => {
    setExpenses((prevdata) => [...prevdata, data]);
  };

  const updateQuantity = (medicineId, newQuantity) => {
    setExpenses((prevMedicines) =>
      prevMedicines.map((medicine) =>
        medicine.medicine_id === medicineId
          ? {
              ...medicine,
              medicine_quantity: medicine.medicine_quantity - newQuantity,
            }
          : medicine
      )
    );
  };

  const mealsList = expenses.map((medicine, index) => (
    <MedicineItem
      key={index}
      id={medicine.medicine_id}
      name={medicine.medicine_name}
      description={medicine.medicine_description}
      price={medicine.medicine_price}
      quantity={medicine.medicine_quantity}
      updateQuantity={updateQuantity}
    />
  ));

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <Product
        onSaveExpenseData={saveExpenseData}
        onShowCart={showCartHandler}
      />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <section>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    </CartProvider>
  );
}

export default App;
