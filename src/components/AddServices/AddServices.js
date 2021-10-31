import React from "react";
import "./AddServices.css";
import { useForm } from "react-hook-form";

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://pacific-wildwood-89146.herokuapp.com/addServices", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Service added succesfully");
          reset();
        }
      });
  };
  return (
    <div className="add-service">
      <h1 className="mt-5 text-center text-danger">Please Add Service</h1>
      <div className=" p-2 d-flex justify-content-center align-items-center">
        <div className="text-center w-25 form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("title")}
              placeholder="enter title"
              className="p-2 m-2 w-100"
            />
            <br />
            <input
              {...register("description", { required: true })}
              placeholder="enter description"
              className="p-2 m-2 w-100"
            />
            <br />
            <input
              {...register("image", { required: true })}
              placeholder="enter image link"
              className="p-2 m-2 w-100"
            />{" "}
            <br />
            <input type="submit" className="btn btn-danger w-50 mx-auto" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
