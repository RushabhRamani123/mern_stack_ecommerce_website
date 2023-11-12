import { useEffect } from "react";
import { getAllCategory } from "../../actions/category";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addCategory } from "../../actions/category";
import { Modal } from "antd";
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { IoIosCheckboxOutline } from "react-icons/io";
import {AiFillCheckSquare} from "react-icons/ai";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
const Category = () => {
const [isModalOpen, setIsModalOpen] = useState(false);
const [CategoryName, setCategoryName] = useState("");
const [parentCategoryId, setparentCategoryId] = useState("");
const [checked, setChecked] = useState([]);
const [expanded, setExpanded] = useState([]);
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
const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
        myCategories.push(
            {
                label: category.name,
                value: category._id,
                children: (category.children &&category.children.length > 0) && renderCategories(category.children)
            }
        );
    }
    return myCategories;
}
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
}
const handelparentcategoryId = (e) => {
setparentCategoryId(e.target.value);
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
      <div>``
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
<CheckboxTree
nodes={renderCategories(category.categories)}
checked={checked}
expanded={expanded}
onCheck={checked => setChecked(checked)}
onExpand={expanded => setExpanded(expanded)}
icons={{check: <AiFillCheckSquare/>,uncheck:<IoIosCheckboxOutline />,halfCheck:<IoIosCheckboxOutline />,expandClose:<MdOutlineArrowForwardIos />,expandOpen:<MdKeyboardArrowDown />}} />
<div style={{ display: "flex", gap: "10px" , marginTop: "10px" }}>
<button onClick={() => {alert("Are you sure you want to delete")}} style={{ backgroundColor: "red", color: "white", padding: "10px", borderRadius: "10px" }}>Delete</button>
<button onClick={() => {alert("Are you sure you want to edit it")}}   style={{ backgroundColor: "green", color: "white", padding: "10px", borderRadius: "10px" }}>Edit</button>
      </div>
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