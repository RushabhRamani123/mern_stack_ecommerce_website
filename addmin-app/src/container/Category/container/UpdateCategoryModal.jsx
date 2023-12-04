const UpdateCategoryModal = ({sendDataToParent, filler , array}) => {
    const sendData = () => {
        // Some action in the child component
        const data = true;
        console.log("This is the updatecategory modal:",array);
        // Call the function passed from the parent
        sendDataToParent(data);
      };
  return (
    <div>
          <button
              
              style={{
                  padding: "10px",
                  borderRadius: "10px", backgroundColor: "green",
                  color: "white", fontWeight: "bold", cursor:
                      "pointer",
                  border: "none"
                  }}  onClick={sendData} >Update {filler}</button>
    </div>
  )
}

export default UpdateCategoryModal
