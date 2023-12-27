import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import FormatPrice from "../compoenents/FormatPrice";
import FormatDate from "../compoenents/DateFormat";

const MyOrder = () => {
  const [orderData, setOrderData] = useState();
  const myOrders = async () => {
    try {
      const response = await axios.get("http://localhost:8000/orders", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      await setOrderData(response.data);
    } catch (error) {
      if (!error?.response) {
        toast("No Server Response", {
          duration: 2000,
        });
      } else if (error.response?.status === 409) {
        toast.error("Already Registered with this Email");
      } else {
        toast("Login Failed\n\nTry After Sometime", {
          duration: 2000,
        });
      }
    }
  };
  useEffect(() => {
    myOrders();
  }, []);

  console.log(orderData);
  if (!orderData || orderData === "[]") {
    return <div>...Loading</div>;
  } else {
    return (
      <section className="myOrder">
        <Toaster />
        <h1>My Orders</h1>
        <div className="table">
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Date</p>
        </div>
        <hr />
        <section className="productDetail">
          {orderData.map((currElem) => {
            return (
              <div key={currElem._id}>
                <div className="prod_data">
                  <img src={currElem.imageURL} alt={currElem.name} />
                  <aside>
                    <span>{currElem.name}</span>
                  </aside>
                </div>
                <p className="price">
                  <FormatPrice price={currElem.price} />
                </p>
                <p className="amount">{currElem.amount}</p>
                <p className="date">
                  <FormatDate dateString={currElem.date.toString()} />
                </p>
              </div>
            );
          })}
        </section>
      </section>
    );
  }
};

export default MyOrder;
