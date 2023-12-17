import { Modal } from 'antd'
import { useState , useEffect } from 'react'
import { getAllCategory } from "../../actions/category";
import { useDispatch, useSelector } from "react-redux";
import { createPage } from "../../actions/page";
import axios from "axios";
const Newpage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [parentId, setparentCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bannerPicture, setBannerPicture] = useState([]);
  const [productPictures, setProductPictures] = useState([]);
    
  useEffect(() => {
    if (parentId === "" && setIsModalOpen === true) 
    {

      setIsModalOpen(true);
      alert ("Please select a category");  
    }
  },[])
  const handelproductPictures = (e) => {
    setProductPictures([...productPictures, e.target.files[0]]);
  }
  const handelBannerPicture = (e) => {
    setBannerPicture([...bannerPicture, e.target.files[0]]);
  }
  const handelDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  }
  const handelTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  }
  const handelparentcategoryId = (e) => {
    setparentCategoryId(e.target.value);
  }; 
  useEffect(() => {
    console.log(parentId);
    console.log(title);
    console.log(description);
    console.log(bannerPicture);
    console.log(productPictures);
  },[parentId,title,description,bannerPicture,productPictures]);
  const cloudname = 'duzddtszj'
  const upload_preset = 'images_uploads'
  const handelok = async (e) => {
    e.preventDefault();
    if (parentId === "") 
      {
      alert("Please select a category");
      return;
    }
    if (title === "") 
      {
      alert("Please select a Title of page");
      return;
    }
    if (description === "") 
      {
      alert("Please select a description of page");
      return;
    }
    if (bannerPicture.length === 0)
      {
      alert("Please select a banner picture");
      return;
    }
    if (productPictures.length === 0)
      {
      alert("Please select a product picture");
      return;
    }
    const form = new FormData();
    form.append("title", title );
    form.append("description", description);
    form.append("category", parentId);
    const formData = new FormData();
    for (let pic of bannerPicture) {
      formData.append("file", pic);
      formData.append("upload_preset", upload_preset);
      const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, formData)
      let url = res.data.secure_url
      console.log(url);
      form.append("banners", url.toString());
    }
    const formData_1 = new FormData();
    for (let pic of productPictures) {
      formData_1.append("file", pic);
      formData_1.append("upload_preset", upload_preset);
      const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, formData)
      let url = res.data.secure_url
      console.log(url);
      form.append("products", url.toString());
    }
    dispatch(createPage(form));
    setIsModalOpen(false);

  }
  const handleCancel = () => {  
    setIsModalOpen(false);
  }
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("get all category");
    dispatch(getAllCategory());
  }, [dispatch]);
  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push({
        label: category.name,
        value:  category._id,
       parentId : (category.parentId ? category.parentId : ""),
        children:
          category.children &&
          category.children.length > 0 &&
          renderCategories(category.children),
      });
    }
    return myCategories;
  };
  const categories = renderCategories(category.categories);
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
  return (
    <div>
      <button
        style={{ backgroundColor: '#36ff57', borderRadius: '4px', padding: '10px', margin: '10px', color: 'white', fontWeight: 'bold' }}
      onClick={() => setIsModalOpen(true)}>Create Page</button>
    <Modal
        okButtonProps={{ style: { backgroundColor: "green" } }}
        set
        okText="Save"
        title={
          <span
            style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}
          >
            Create Page
          </span>
        }
        cancelText="Cancel"
        cancelButtonProps={{
          style: { backgroundColor: "red", color: "white" },
        }}
        open={isModalOpen}
        onOk={handelok}
        onCancel={handleCancel}
      >
          <select
          onChange={handelparentcategoryId}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid black",
            marginTop: "10px",
            cursor: "pointer",
            width: "100%",
          }}
          autoFocus={false}
        >
          <option>Select Categories</option>
          {createCategoryList()}
        </select>
        <input type="text" placeholder='Page Title' onChange={handelTitle} />
        <input type="text" placeholder='Page Description' onChange={handelDescription} />
        <div style={{ display: 'flex', flexDirection:'column' }}>
        <input type="file"  onChange={handelBannerPicture} />
        <input type="file" onChange={handelproductPictures} />
      </div>
      </Modal>
    </div>

  )
}

export default Newpage;