import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageOrders.css";
const ManageOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch("https://pacific-wildwood-89146.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  // update status
  const handleUpdate = (id) => {
    const procedToUpdate = window.confirm("Confirm Update Status");
    if (procedToUpdate) {
      fetch(`https://pacific-wildwood-89146.herokuapp.com/orders/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Order Approved");
            window.location.reload(false);
          }
        });
    }
  };
  // delet orders
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
      <div className="container manage-order-container">
        <div className="text-center">
          <h2 className="p-2">Manage All Orders</h2>
          <Table className="table2" striped bordered hover>
            <thead>
              <tr>
                <th>Order No</th>
                <th>Name</th>
                <th>Package</th>
                <th>Status</th>
                <th>Update Status</th>
                <th>Delet</th>
              </tr>
            </thead>
            {myOrders?.map((odr, index) => (
              <tbody key={odr._id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{odr.name}</td>
                  <td>{odr.title}</td>
                  <td>{odr.status}</td>
                  <td>
                    <button
                      onClick={() => handleUpdate(odr._id)}
                      className="btn bg-danger update-btn text-white mx-auto"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteProduct(odr._id)}
                      className="btn bg-danger text-white delet-btn2 mx-auto ms-3"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </>
  );
};

export default ManageOrders;
