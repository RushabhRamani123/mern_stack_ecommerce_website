import { useState } from 'react'
import { Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'  
import {addProduct} from '../../actions/product'
const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [productPictures, setProductPictures] = useState([]);
  const [categoryId, setCategoryName] = useState("653c0e47d58054f01b4c8e8c");
  const dispatch = useDispatch(); 

  const category = useSelector((state) => state.category);
  const showModal = () => {
    setIsModalOpen(true);
  };
  // name: name,
  // slug: slugify(name),
  // price,
  // description,
  // quantity,
  // category,
//   // productImage,
  // name
// price
// description
// quantity
// category
// productImage
  const handleOk = () => {
    setIsModalOpen(false);
    const form = new FormData();
    form.append("name", name);
    form.append("quantity", quantity);
    form.append("price", price);
    form.append("description", description);
    form.append("category", categoryId);

    for (let pic of productPictures) {
      form.append("productPicture", pic);
    }

    dispatch(addProduct(form))
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAddCategory = () => {
    setIsModalOpen(true);
  };
  const createCategoryList = () => {
    let myCategories = [];

    for (let i = 0; i < category.categories.length; i++) {
      myCategories.push(
        <option
          key={category.categories[i].id}
          style={{ cursor: "pointer", padding: "10px" }}
          value={category.categories[i].id}
        >
          {category.categories[i].name}
        </option>
      );
      if (category.categories[i].children.length > 0) {
        myCategories.push(
          <option key={category.categories[i].id} style={{ paddingLeft: "20px" }}>
            {childCategories(category.categories[i].children)}
          </option>
        );
      }
    }

    return myCategories;
  };

  const childCategories = (children) => {
    let childOptions = [];

    for (let i = 0; i < children.length; i++) {
      childOptions.push(
        <option key={children[i].id} value={children[i].id}>{children[i].name}</option>
      );
      // this is the amazing case where you are passing the children array with its previous data
      if (children[i].children && children[i].children.length > 0) {
        childOptions.push(...childCategories(children[i].children));
      }
    }

    return childOptions;
  };
  const handleaddCategory = (e) => {
    e.preventDefault();
    // setCategoryName(e.target.value);
    // console.log(CategoryName);
  }
  const handelProductPicture = (e) => {
    setProductPictures([
      ...productPictures,
      e.target.files[0]
    ])
  }
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  return ( 
    
         <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "#001529",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            border: "none",
          }}
        >
          <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>Product</h1>
          <button
            style={{
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "green",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              border: "none",
            }}
            onClick={handleAddCategory}
          >
           Add Product
          </button>
        </div>
      </div>
    
      <Modal
        okButtonProps={{ style: { backgroundColor: "green" } }}
        set
        okText="SaveChanges "
        cancelButtonProps={{ style: { backgroundColor: "red", color: "white" , fontWeight:"bold"} }}
        title="Add Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input
          type="text"
          name="name"
          placeholder="Name" 
          style={{marginTop : "10px"}}  
          onChange={handleNameChange}
        />
        <input
          name="price"
          type="text"
          placeholder="Price" 
          style={{marginTop : "10px"}}  
          onChange={handlePriceChange}
        />
        <input
          name="description"
          type="text"
          placeholder="Description"
          style={{marginTop : "10px"}}
          onChange={handleDescriptionChange}
        />
        <input
          name="quantity"
          type="text"
          placeholder="Quantity"
          style={{marginTop : "10px"}}
          onChange={handleQuantityChange}
        />
        <input
          name='CreatedBy'
          type="text"
          placeholder="CreatedBy"
          style={{marginTop : "10px"}}
          onChange={(e) => console.log(e.target.value)}
        />
        <select
          name="category" 
          onChange={handleaddCategory}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid black",
            marginTop: "10px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          <option>Select Categories</option>
          {createCategoryList()}
        </select>
         <input
          type="file"
          name="productImage"
          placeholder="ProductImage"
          style={{marginTop : "10px"}}
          onChange={handelProductPicture}
        />
       
      </Modal>
    </>
  )
}

export default Product

