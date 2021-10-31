import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import "./MyOrders.css";
const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch("https://pacific-wildwood-89146.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  const myOrder = myOrders.filter((order) => order.email === user.email);

  // delet order
  const handleDeleteProduct = (id) => {
    const procedToDelet = window.confirm("Confirm Delet Order");
    if (procedToDelet) {
      fetch(`https://pacific-wildwood-89146.herokuapp.com/deleteOrder/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            alert("Order Delet Successfully");
            const remainingOrders = myOrders.filter(
              (order) => order._id !== id
            );
            setMyOrders(remainingOrders);
          }
        });
    }
  };
  return (
    <>
      <div className="container mt-5 order-container">
        <div className="text-center mb-5">
          <h2>Your Orders</h2>
        </div>
        <Table className="table" striped bordered hover>
          <thead>
            <tr>
              <th>Order No</th>
              <th>Name</th>
              <th>Package</th>
              <th>Status</th>
            </tr>
          </thead>
          {myOrder?.map((odr, index) => (
            <tbody key={odr._id}>
              <tr>
                <td>{index + 1}</td>
                <td>{odr.name}</td>
                <td>{odr.title}</td>
                <td>{odr.status}</td>
                <td>
                  <button
                    onClick={() => handleDeleteProduct(odr._id)}
                    className="btn bg-danger text-white delet-btn mx-auto ms-3"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
};

export default MyOrders;
