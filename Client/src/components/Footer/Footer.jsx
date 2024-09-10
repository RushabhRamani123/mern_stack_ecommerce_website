import Information from "./Information";
import Newsletter from "./Newsletter";
const Footer = () => {
  
  return (
    <div 
    style={{ marginTop: "2rem", overflow: "hidden" }}
    >
      <Newsletter/>
        <Information/>  
    </div>
  );
};

export default Footer;
