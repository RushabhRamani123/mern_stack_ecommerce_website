import { useState } from 'react'
import { Modal, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'  
import { addProduct } from '../../actions/product'

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
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    const form = new FormData();
    form.append("name", name);
    form.append("quantity", quantity);
    form.append("price", price);
    form.append("description", description);
    form.append("category", categoryId);

    for (let pic of productImage) {
      form.append("productImage", pic);
    }

    dispatch(addProduct(form))
  };
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
    // setCategoryName(e.target.value);
    // console.log(CategoryName);
  }
  const handelProductPicture = (e) => {
    setProductPictures([
      ...productImage,
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
  // table data 
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Category 1',
          value: 'Category 1',
        },
        {
          text: 'Category 2',
          value: 'Category 2',
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: '25%',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Category 1',
          value: 'Category 1',
        },
        {
          text: 'Category 2',
          value: 'Category 2',
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: '15%',
    },
    {
      title: 'Qauntity',
      dataIndex: 'quantity',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Category 1',
          value: 'Category 1',
        },
        {
          text: 'Category 2',
          value: 'Category 2',
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: '15%',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      filterMode: 'tree',
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: '25%',
    },
      {
        title: 'Category',
        dataIndex: 'category',
        filters: [
          {
            text: 'London',
            value: 'London',
          },
          {
            text: 'New York',
            value: 'New York',
          },
        
        ],
        filterMode: 'tree',
        onFilter: (value, record) => record.address.startsWith(value),
        filterSearch: true,
        width: '25%',
    }
  ];
  const data = [];
  for (let i = 0; i <(product.products&&product.products.length); i++) {
    console.log(product.products[i].name);
    console.log(product.products[i].price);
    console.log(product.products[i].quantity);
    console.log(product.products[i].description);
    console.log(product.products[i].category);
    data.push({
      key: i + 1,
      name: product.products[i].name,
      price: product.products[i].price,
      quantity: product.products[i].quantity,
      description: product.products[i].description,
      category: product.products[i].category
    });
  }
  console.log(data); 
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
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
      <Table columns={columns} dataSource={data} onChange={onChange} />;
    </>
  )
}

export default Product

