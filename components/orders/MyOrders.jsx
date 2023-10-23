"use client";
import Plans from "../plans/Plans";
// import SinglePlan from "../plans/SinglePlan";
import { useDispatch, useSelector } from "react-redux";
import SingleOrder from "./SingleOrder";

const MyOrders = () => {
  const { userInfo, message } = useSelector((state) => state.user);
  console.log(userInfo)
  console.log(message)

  return (
    <div className="container">
      <h2 className="text-center">My Orders</h2>
      <div className="container">
      
      <div className="plans__box container">
        <SingleOrder></SingleOrder>
        <SingleOrder></SingleOrder>
        <SingleOrder></SingleOrder>
        <SingleOrder></SingleOrder>

      </div>
          
      </div>

    </div>
  )
}

export default MyOrders;