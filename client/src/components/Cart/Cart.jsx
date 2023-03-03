import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1677442992191-33e64435ad7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
      img2: "https://images.unsplash.com/photo-1677537946795-e5558b7f4601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
      title: "Long Sleeve graphic t shirt",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nisi error voluptatibus perferendis vero doloremque tempora. Quos veniam nulla quam dolorem commodi nostrum aut corporis, quis sequi minima earum repellat.",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1677442992191-33e64435ad7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
      img2: "https://images.unsplash.com/photo-1677537946795-e5558b7f4601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
      title: "Long Sleeve graphic t shirt",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nisi error voluptatibus perferendis vero doloremque tempora. Quos veniam nulla quam dolorem commodi nostrum aut corporis, quis sequi minima earum repellat.",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in cart</h1>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">1 * $ {item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>TOTAL</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
