import React from "react";
import { useDispatchCart } from "./contextReducer";
import { useCart } from "./contextReducer";
import { useNavigate } from "react-router-dom";

function MyCart() {
  const navigate = useNavigate();
  let data = useCart();
  let dispatch = useDispatchCart();
  console.log(data);

  let totalPrice = 0;

  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center-light fs-3">
          The Cart is Empty!
        </div>
      </div>
    );
  }
  data.forEach((clothes) => {
    totalPrice += clothes.price;
  });

  const handleDelete = (index) => {
    dispatch({ type: "REMOVE", index: index });
  };

  const handleCheckout = () => {
    navigate("/statusPage");
  };
  return (
    <div className="m-auto">
      <div className="table-responsive">
        <table className="orderCart table ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">ProductID</th>
              <th scope="col">Size</th>
              <th scope="col">Price</th>
            </tr>
          </thead>

          <tbody className="orderCart">
            {data.map((clothes, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{clothes.name}</td>
                <td>{clothes.id}</td>
                <td>{clothes.size}</td>
                <td>{clothes.price}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-light p-0"
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h3 className="fs-2">Total Price:₹ {totalPrice} /-</h3>
        </div>
        <div>
          <button
            className="btn bg-success mt-5 "
            onClick={() => {
              handleCheckout();
            }}
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyCart;
