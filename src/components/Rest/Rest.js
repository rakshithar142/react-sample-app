import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getSingleProduct, getPassenger, updatePost } from "../../redux/actions";

export default function Rest() {
  const dispatch = useDispatch();
  const { passengers, updatedPost } = useSelector((state) => state.user);
  const [productId, setProductid] = useState();
  const [postTitle, setPostTitle] = useState("");
  const [singleProduct, setsingleProduct] = useState("");
  const [allProducts, setAllProducts] = useState("");
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(66);

  const payload = `page=${page}&size=${size}`;
  
  const postPayload = {
    title: postTitle,
    body: 'bar',
    userId: 1,
  }

  useEffect(() => {
    dispatch(getPassenger(payload));
  }, [page, size]);

  const getAllProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setAllProducts(res.data))
      .catch((err) => console.log(err));
  };

  const handlePrevious = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <h2>REST</h2>
      <h4>
        REST, or REpresentational State Transfer, is an architectural style for
        providing standards between computer systems on the web, making it
        easier for systems to communicate with each other.
      </h4>
      {/* <div style={{ margin: "10px" }}>
        <input
          style={{ width: "100px" }}
          placeholder="Enter product id"
          onChange={(e) => setProductid(e.target.value)}
        />
        <button onClick={()=>dispatch(getSingleProduct(productId))}>Get single product</button>
         {singleProduct && (
          <div style={{ width: "900px", border: "1px solid black" }}>
            <div>
              <strong>Product name:</strong> {singleProduct.title}
            </div>
            <div>
              <strong>About:</strong> {singleProduct.description}
            </div>
          </div>
        )} 
      </div>*/}
      <div style={{ margin: "10px" }}>
        <input
          style={{ width: "100px" }}
          placeholder="Enter product title"
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <button onClick={()=>dispatch(updatePost(postPayload))}>Update post</button>
        <div>{JSON.stringify(updatedPost)}</div>
      </div>
      <div style={{ margin: "10px" }}>
        <button onClick={getAllProducts}>Get all products</button>
        {allProducts && (
          <div style={{ width: "900px", border: "1px solid black" }}>
            {allProducts.slice(0, 5).map((product) => (
              <>
                <div>
                  <strong>Product name: </strong>
                  {product.title}
                </div>
                <div>
                  <strong>About: </strong>
                  {product.description}
                </div>
              </>
            ))}
          </div>
        )}
      </div>
      <div>
        {passengers && (
          <span>
            <button disabled={page <= 1} onClick={handlePrevious}>
              Previous
            </button>
            {page} of Pages {passengers?.totalPages}
            <button
              disabled={page >= passengers?.totalPages}
              onClick={handleNext}
            >
              Next
            </button>
          </span>
        )}
        <div>
          {passengers &&
            passengers?.data?.map((passenger) => (
              <div>
                {passenger.name} completed {passenger.trips} trips
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
