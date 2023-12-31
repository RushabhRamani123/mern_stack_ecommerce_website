import { useState } from "react";
import { Modal, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addProduct,deleteProductById } from "../../actions/product";
import { intialData } from "../../actions/intialData"
import './product.css';
import axios from "axios";
const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [productImage, setProductPictures] = useState([]);
  const [categoryId, setCategoryName] = useState("653c0e47d58054f01b4c8e8c");
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const product = useSelector((state) => state.product);
  const cloudname = 'duzddtszj'
  const upload_preset = 'images_uploads'

  console.log("This is the product",product);
  console.log(product);
    const handleOk = async () => {
      setIsModalOpen(false);
      let productPictures = [];
      const formData = new FormData();
      for (let pic of productImage) {
        formData.append("file", pic);
        formData.append("upload_preset", upload_preset);
        const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, formData)
        let url = res.data.secure_url
        console.log(url);
        productPictures.push(url.toString());
      }
      const form = {
        name: name,
        quantity: quantity,
        price: price,
        description: description,
        category: categoryId,
        productPictures: productPictures
      }
      dispatch(addProduct(form));
    };
  const [flag, setFlag] = useState(0);
  console.log(product);
  if (flag == 0)
  {
    dispatch(intialData());
    setFlag(1);
    }
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleAddCategory = (e) => {
    setIsModalOpen(true);
    setCategoryName(e.target.value);
    console.log(categoryId);
  };
  const createCategoryList = () => {
    let myCategories = [];

    const renderCategoryOptions = (categories) => {
      for (let i = 0; i < categories.length; i++) {
        myCategories.push(
          <option key={categories[i].id} value={categories[i]._id}>
            {categories[i].name}
          </option>
        );

        if (categories[i].children && categories[i].children.length > 0) {
          renderCategoryOptions(categories[i].children);
        }
      }
    };

    renderCategoryOptions(category.categories);

    return myCategories;
  };
  const handleaddCategory = (e) => {
    e.preventDefault();
    setCategoryName(e.target.value);
    console.log(categoryId);
  };
  const handelProductPicture = (e) => {
    console.log(productImage);
    setProductPictures([...productImage, e.target.files[0]]);
  };
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
  const data = [];
  for (let i = 0; i < (product.products && product.products.length); i++) {
    console.log(product.products[i]._id);
    const productData = {
      key: i + 1,
      name: product.products[i].name,
      price: product.products[i].price,
      quantity: product.products[i].quantity,
      description: product.products[i].description,
      id: product.products[i]._id
    };

    if (
      product.products[i].productPictures &&
      product.products[i].productPictures.length > 0
    ) {
      productData.productPictures = product.products[i].productPictures;
    }

    data.push(productData);
  }

  console.log("This is the product data",data);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  // Function to open the modal
  const handleRowClick = (record) => {
    setSelectedRow(record);
    // setIsModalVisible(true);
    console.log(record);
  }; 
  const handleok = () => {
    setIsModalVisible(false);
  };
  const handlecancel = () => {
    setIsModalVisible(false);
  };
  const onChange = (filters, sorter, extra) => {
    console.log("params",  filters, sorter, extra);
  };
  const columns = [
    {
      title: 'Image',
      dataIndex: 'productPictures',
      titleStyle:{ background: 'blue', color: 'white', fontWeight: 'bold' },
      onFilter: (value, record) => record.address.startsWith(value),
      width: '15%',
      render: (text, record) => (
        <img src={record.productPictures[0]} alt="product" style={{ width: '50px', height: '50px' }} />
      ),
    },
    {
      title:"Name",
      dataIndex: "name",
      filters: data.map(item => ({
        text: item.name,
        value: item.name,
      })),
      filterDropdownStyle: { backgroundColor: 'lightblue', padding: '8px' },
      filterMode: "single",
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: "20%",

    },
    {
      title: "Price",
      dataIndex: "price",
      onFilter: (value, record) => record.name.startsWith(value),
      width: "15%",
    },
    {
      title: "Qauntity",
      dataIndex: "quantity",
      onFilter: (value, record) => record.name.startsWith(value),
      width: "15%",
    },

    {title: 'Action',
    width: '15%',
    dataIndex: 'id',
    render: (record) => (
      <div
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          fontWeight:'bold',
          cursor: 'pointer',
          border: 'none',
        }}
      >
        <button
          style={{
            padding: '10px',
            borderRadius: '10px',
            backgroundColor: '#046963',
            color: 'white',
          }}
          onClick={() => {
            setIsModalVisible(false);
            const payload = {
              productId: record
            };
            dispatch(deleteProductById(payload));
          }}
        >
          Delete
        </button>
          <button
            style={{
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "#046963",
              color: "white",
            }}
          onClick={() => setIsModalVisible(true)}
          >
          Info
        </button>
        </div>
        
        ),
    },
  ];


  return (
    <>
    
      <div style={{padding:"24px"}}>
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
        cancelButtonProps={{
          style: { backgroundColor: "red", color: "white", fontWeight: "bold" },
        }}
        title="Add Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          style={{ marginTop: "10px" }}
          onChange={handleNameChange}
        />
        <input
          name="price"
          type="text"
          placeholder="Price"
          style={{ marginTop: "10px" }}
          onChange={handlePriceChange}
        />
        <input
          name="description"
          type="text"
          placeholder="Description"
          style={{ marginTop: "10px" }}
          onChange={handleDescriptionChange}
        />
        <input
          name="quantity"
          type="text"
          placeholder="Quantity"
          style={{ marginTop: "10px" }}
          onChange={handleQuantityChange}
        />
        <input
          name="CreatedBy"
          type="text"
          placeholder="CreatedBy"
          style={{ marginTop: "10px" }}
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
          style={{ marginTop: "10px" }}
          onChange={handelProductPicture}
        />
      </Modal>
      <Table
  columns={columns}
  dataSource={data}
  onChange={onChange}
  style={{ marginTop: "2rem" , width: "100%" , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}
  onRow={(record) => ({
    onClick: () => handleRowClick(record),
  })}
/>

      <Modal
        okButtonProps={{ style: { backgroundColor: "green" , color: "white" } }}
        title="Row Details"
        open={isModalVisible}
        onOk={handleok}
        onCancel={handlecancel}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
        cancelButtonProps={{
          style: { backgroundColor: "red", color: "white", fontWeight: "bold" },
        }}
      >
        {selectedRow && (
          <div>
            <p><span style={{ fontWeight: "bold" }}>Name</span>:{selectedRow.name}</p>
            <p><span style={{fontWeight:"bold"}}>Price</span>:{selectedRow.price}</p>
            <p><span style={{fontWeight:"bold"}}>Quantity</span>:{selectedRow.quantity}</p>
            <p><span style={{ fontWeight: "bold" }}>Description</span>:{selectedRow.description}</p>
            <p><span style={{ fontWeight: "bold" }}>Product Image</span>:</p>
            <div style={{ display: "flex", gap: "30px" ,overflow: "hidden" }}>
            {
              selectedRow.productPictures && selectedRow.productPictures.map(picture => {
                return (<img key={picture} src={picture}  style={{ borderRadius: "5px" , cursor:"pointer" , width: "100px", height: "130px" }} />)
              })
            }
           </div>
          </div>
        )}
      </Modal>
      </div>
    </>
  );
};
export default Product;