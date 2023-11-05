import { useEffect } from "react";
import { getAllCategory } from "../../actions/category";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addCategory } from "../../actions/category";
import { Modal , Button } from "antd";
const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [CategoryName, setCategoryName] = useState("");
  const [parentCategoryId, setparentCategoryId] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    const form = {
      name: CategoryName ,
      parentId: parentCategoryId,
      
   }
    dispatch(addCategory(form));
    // setparentCategoryId("");
    // setCategoryName("");

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
            {category.categories[i].children &&
            category.categories[i].children.length > 0
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
        <li key={children[i].id}>
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

  const renderCategoryOptions = (categories) => {
    for (let i = 0; i < categories.length; i++) {
      myCategories.push(
        <option key={categories[i].id} value={categories[i]._id}>
          {categories[i].name}
        </option>
      );

      if (categories[i].children.length > 0) {
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
    // console.log(CategoryName);
  }
  const handelparentcategoryId = (e) => {
    setparentCategoryId(e.target.value);
    // console.log(parentCategoryId);
  };
useEffect(() => {
    console.log(CategoryName);
}, [CategoryName]);

useEffect(() => {
    console.log(parentCategoryId);
}, [parentCategoryId]);
const handleOkWithLogging = () => {
  handleOk();
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
        okText="Save"
        title={<span style={{ color: "green" , fontWeight: "bold" , fontSize: "20px"}}>Add Category</span>} 
        cancelText="Cancel"
        cancelButtonProps={{ style: { backgroundColor: "red"  , color: "white"} }}
        open={isModalOpen}
        onOk={handleOkWithLogging}
        onCancel={handleCancel}
      >
        <input
          type="text"
          style={{
            border: "1px solid black",
          }}
          placeholder="Category"
          onChange={handleaddCategory}
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
          autoFocus={false}
        >
          <option>Select Categories</option>
          {createCategoryList()}
        </select>
      </Modal>
    </>
  );
};

export default Category;
