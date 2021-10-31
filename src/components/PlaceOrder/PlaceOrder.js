import React, { useEffect, useState } from "react";
import "./PlaceOrder.css";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const PlaceOrder = () => {
  const { register, handleSubmit, reset } = useForm();
  const { serviceId } = useParams();
  const { user } = useAuth();
  const [services, setServices] = useState([]);
  const service = services.find((service) => service._id === serviceId);
  useEffect(() => {
    fetch("https://pacific-wildwood-89146.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const onSubmit = (data) => {
    data.status = "Pending";
    fetch("https://pacific-wildwood-89146.herokuapp.com/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Your Order Successfully Added");
          reset();
        }
      });
  };
  return (
    <>
      <div className="container mt-5">
        <div className="text-center">
          <h3>Please Fillup The Form</h3>
        </div>
        <div className=" p-2 d-flex justify-content-center align-items-center order-container">
          <div className="text-center w-75 order-container ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                defaultValue={service?.title}
                {...register("title")}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                defaultValue={user.displayName}
                placeholder="enter your name"
                {...register("name")}
                className="p-2 m-2 w-100"
              />{" "}
              <br />
              <input
                defaultValue={user.email}
                {...register("email")}
                placeholder="enter your email"
                className="p-2 m-2 w-100"
              />{" "}
              <br />
              <input
                {...register("mobile")}
                placeholder="enter your mobile no"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("address")}
                placeholder="enter your address"
                className="p-2 m-2 w-100"
              />{" "}
              <br />
              <input
                type="submit"
                value="Place Your Order Please"
                className="btn btn-danger mt-3 w-50 mx-auto order-btn"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
