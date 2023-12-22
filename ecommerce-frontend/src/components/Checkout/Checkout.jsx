import Navbar from "../Navbar/Navbar";
import { getAddress, addAddress } from '../../actions/user';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Checkout = () => {
  const dispatch = useDispatch();
  const add = useSelector((state) => state.user.add);

  useEffect(() => {
    dispatch(getAddress());
    console.log("This the get address " + add);
  },[]);

  // this is the format just check it out 
  // const info = {
  //   address: {
  //     name: "name",
  //   mobileNumber: "9082070031",
  //   pinCode: "8569",
  //   locality: "Dm nagar",
  //   address: "Mumbai",
  //   cityDistrictTown: "cityDistrictTown",
  //   state: "state",
  //   landmark: "landmark",
  //   alternatePhone: "9082070031",
  //   addressType: "home",
  //   }
  // };

  // Move the dispatch inside the useEffect to ensure it runs after the getAddress
  // useEffect(() => {
  //   dispatch(addAddress(info));
  // },[]);

  return (
    <div>
      <Navbar />
      <h1>Checkout</h1>
    </div>
  );
};

export default Checkout;
