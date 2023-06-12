import React from "react";

import { useCart } from "./contextReducer";

function MyCart() {
  let data = useCart();
  console.log(data);

  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center-light fs-3">
          The Cart is Empty!
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">ProductID</th>
              <th scope="col">Size</th>
              <th scope="col">Price</th>
            </tr>
          </thead>

          <tbody className="text-dark">
            {data.map((food, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.id}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button type="button" className="btn btn-light p-0">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h3 className="fs-2">Total Price: /-</h3>
        </div>
        <div>
          <button className="btn bg-success mt-5 ">Check Out</button>
        </div>
      </div>
    </div>
  );
}

export default MyCart;
