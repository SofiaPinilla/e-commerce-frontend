import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll,like,reset } from "../../../../features/products/productsSlice";
import "antd/dist/antd.css";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const Product = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getAll());
    await dispatch(reset());
  }, []);

  if (isLoading) {
    return <h1>Cargando products...</h1>;
  }

  const product = products?.map((product) => {
    const isAlreadyLiked = product.wishList?.includes(user?.user?._id);
    return (
      <div className="Product" key={product._id}>
        <p>{product.name}</p>
        <span className="wish">Wish list: {product.wishList?.length}</span>
        {isAlreadyLiked ? (
          <HeartFilled  onClick={  isAlreadyLiked  ? () => console.log("dislike")  : () => dispatch(like(product._id))  } />
        ) : (
          <HeartOutlined onClick={  isAlreadyLiked  ? () => console.log("dislike")  : () => dispatch(like(product._id))  } />
        )}
      </div>
    );
  });

  return <div>{product}</div>;
};

export default Product;