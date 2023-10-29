import { useEffect } from "react";
import { addCategory, getAllCategory } from "../../actions/category";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Modal } from "antd";
const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [CategoryName, setCategoryName] = useState("");
  const [parentCategoryId, setparentCategoryId] = useState("");
  const [categoryImage, setcategoryImage] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    const form = new FormData();
    form.append("name", CategoryName);
    form.append("parentId", parentCategoryId);
    // form.append("categoryImage", categoryImage);
    dispatch(addCategory(form));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAddCategory = () => {
    setIsModalOpen(true);
  };

  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("get all category");
    dispatch(getAllCategory());
  }, []);

  const renderCategory = () => {
    let myCategories = [];

    for (let i = 0; i < category.categories.length; i++) {
      myCategories.push(
        <li
          key={category.categories[i].id}
          style={{ cursor: "pointer", padding: "10px" }}
        >
          {category.categories[i].name}
          <ul style={{ paddingLeft: "20px" }}>
           {(category.categories[i].children && category.categories[i].children.length > 0)
             ? renderChildCategories(category.categories[i].children)
             : null}
          </ul>
        </li>
      );
    }

    return myCategories;
  };

  const renderChildCategories = (children) => {
    let childCategories = [];

    for (let i = 0; i < children.length; i++) {
      childCategories.push(
        <li key={children[i].id}
        >
          {children[i].name}
          <ul style={{ paddingLeft: "20px" }}>
           {children[i].children && children[i].children.length > 0
             ? renderChildCategories(children[i].children)
             : null}
          </ul>
        </li>
      );
    }

    return childCategories;
  };
  const createCategoryList = () => {
    let myCategories = [];

    for (let i = 0; i < category.categories.length; i++) {
      myCategories.push(
        <option
          key={category.categories[i].id}
          style={{ cursor: "pointer", padding: "10px" }}
        >
          {category.categories[i].name} 
        </option>
      );
      if (category.categories[i].children.length > 0)
      {
        myCategories.push(
          <option style={{ paddingLeft: "20px" }}>
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
     childOptions.push(<option key={children[i].id}>{children[i].name}</option>);
 // this is the amazing case where you are passing the children array with its previous data 
     if (children[i].children && children[i].children.length > 0) {
       childOptions.push(...childCategories(children[i].children));
     }
   }
 
   return childOptions;
 };
  const handleCategoryImage = (e) => {
    setcategoryImage(e.target.files[0]);
  };
  const handelparentcategoryId = (e) => {
    setparentCategoryId(e.target.value);
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
          <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>Category</h1>
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
            Add Category
          </button>
        </div>
      </div>
      {<ul>{renderCategory(category)}</ul>}
      <Modal
        okButtonProps={{ style: { backgroundColor: "green" } }}
        set
        okText="SaveChanges "
        title="Add Category"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input
          type="text"
          placeholder="Category"
          onChange={(e) => setCategoryName(e.target.value)}
        />
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
        >
          <option>Select Categories</option>
          {createCategoryList()}
        </select>
        <input
          type="file"
          name="image"
          style={{ marginTop: "10px", cursor: "pointer", width: "100%" }}
          onChange={handleCategoryImage}
        />
      </Modal>
    </>
  );
};

export default Category;
