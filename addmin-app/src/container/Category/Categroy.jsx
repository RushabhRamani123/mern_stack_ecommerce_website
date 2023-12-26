import { useEffect } from "react";
import { getAllCategory , updateCategory , deleteCategory } from "../../actions/category";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addCategory } from "../../actions/category";
import { Modal } from "antd";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { IoIosCheckboxOutline } from "react-icons/io";
import { AiFillCheckSquare } from "react-icons/ai";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Row, Col } from 'antd';
import './category.css';
const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [CategoryName, setCategoryName] = useState("");
  const [parentCategoryId, setparentCategoryId] = useState("");
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [checkedArray, setCheckedArray] = useState([]);
  const [expandedArray, setExpandedArray] = useState([]);
  const findCategoryAndChildren = (categories, categoryId, result = []) => {
    console.log(checked)
    const findRecursive = (category) => {
      if (category.value === categoryId) {
        result.push(category);
        return true;
      }
  
      if (category.children && category.children.length > 0) {
        return category.children.some(findRecursive);
      }
  
      return false;
    };
  
    categories.some(findRecursive);
  
    return result;
  };
  const updateCheckedAndExpandedCategories = () => {
    const CheckedArray = []; 
    const ExpandedArray = [];
    console.log(category)
    const categories = renderCategories(category.categories);
    const checkedArray = checked.flatMap(categoryId => findCategoryAndChildren(categories, categoryId));
    category && CheckedArray.push(checkedArray);
    const expandedArray = expanded.flatMap(categoryId => findCategoryAndChildren(categories, categoryId));
    category && ExpandedArray.push(expandedArray);
    setCheckedArray(checkedArray);
    setExpandedArray(expandedArray);
    console.log(expandedArray.length);
    console.log(expandedArray);
    console.log(checkedArray.length);
    console.log(checkedArray);
  }
  const handleCategoryInput = (key, value, index, type) => {
    console.log(value);
    if (type == "checked") {

      const updatedCheckedArray = checkedArray.map((item, _index) =>
            index == _index ? { ...item, [key]: value } : item);
      setCheckedArray(updatedCheckedArray);
      console.log("This is the update checked array",checkedArray)
    } else if (type == "expanded") {
        const updatedExpandedArray = expandedArray.map((item, _index) =>
            index == _index ? { ...item, [key]: value } : item);
      setExpandedArray(updatedExpandedArray);
      console.log("This is the update expanded array",expandedArray)
    }
}
  const update = () => {
    if(checkedArray.length == 0 && expandedArray.length == 0){
      alert("Please select category");
      setIsModalOpen2(true);
      return;
    }
    updateCheckedAndExpandedCategories(); 
    updateCategoryForm();
    setIsModalOpen2(false);
  }
  const updateCategoryForm = () => {
    const form = new FormData();
  
    const appendData = (item) => {
      form.append("_id", item.value);
      form.append("name", item.label);
      form.append("parentId", item.parentId);
      form.append("type", item.type);
    };
    checkedArray.forEach(appendData);
    console.log(form);
    dispatch(updateCategory(form));
  };
  
  const handleEdit = () => {
    setIsModalOpen2(true); 
    updateCheckedAndExpandedCategories();
    console.log("Edit this array!!",checkedArray);
  }
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };
  const deleteCategories = () => {
    const checkedIdsArray =checkedArray.map((item) => ({_id: item.value}));
    const Ids = checkedIdsArray;
    console.log(Ids);
    dispatch(deleteCategory(Ids));
  }
  const handleOk1 = () => {
    setIsModalOpen1(false);
    if(checkedArray.length == 0){
      alert("Please select category");
      setIsModalOpen1(true);
      return;
    }
  deleteCategories() ; 
  };
  const handleDelete = () => {
    updateCheckedAndExpandedCategories();
    console.log("delete", checkedArray);
    setIsModalOpen1(true); 
  }
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    if (CategoryName == "") {
      alert("Please provide category name");
      setIsModalOpen(true);
      return; 
    }

    const form = {
      name: CategoryName,
      parentId: parentCategoryId,
    };
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
  };
  const handelparentcategoryId = (e) => {
    setparentCategoryId(e.target.value);
  };
  useEffect(() => {
    console.log(CategoryName);
  }, [CategoryName]);
  useEffect(() => {
    console.log(parentCategoryId);
  }, [parentCategoryId]);
  const cheker = (data) => {
    if (data) {
      console.log(data);
      console.log(checkedArray);
    }
  }
  const renderUpdateCategoriesModal = () => {
    return (<Modal
      okButtonProps={{ style: { backgroundColor: "green" } }}
      set
      okText="Save"
      title={
        <span style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}>
          Update Category
        </span>
      }
      cancelText="Cancel"
      cancelButtonProps={{
        style: { backgroundColor: "red", color: "white" },
      }}
      open={isModalOpen2}
      onOk={update}
      onCancel={handleCancel2}
    >
      <Row><h1>Expanded Categories</h1></Row>
      {expandedArray.length > 0 && expandedArray.map((item, index) => (
        <Row key={item.id}>
          <Col>
            <input
              type="text"
              onChange={(e) => handleCategoryInput("label", e.target.value, index, "expanded")}
              style={{
                border: "1px solid black",
                width: "100%",
                boxSizing: "border-box",
                padding: "10px",
                borderRadius: "5px",
                marginTop: "10px",
              }} placeholder={item.label} />
          </Col>
          <Col style={{ marginLeft: "50px" }}>
            <select
     
              onChange={(e) => {
                handelparentcategoryId,
                  handleCategoryInput("parentId", e.target.value, index, "expanded")
              }}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid black",
                marginTop: "10px",
                cursor: "pointer",
                width: "100%",
              }}
              value={item.parentId !== undefined ? item.parentId : ""}
              autoFocus={false}
            >
              <option>Select Categories</option>
              {createCategoryList()}
            </select>
          </Col>
          <Col style={{ marginLeft: "50px" }}>
            <select
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid black",
                marginTop: "10px",
                cursor: "pointer",
                width: "100%",
                
              }}
              onChange={(e) => handleCategoryInput("type", e.target.value, index, "expanded")}
            >
              <option value="">Product</option>
              <option value="">Order</option>
              <option value="">Cart</option>
              <option value="">Page</option>
            </select>
          </Col>
        </Row>
      ))}
      <Row>
        <h1 style={{ marginTop: "10px" }}>Selected Category</h1>
      </Row>
      {checkedArray.length > 0 && checkedArray.map((item, index) => (
        <Row key={item.id}>
          <Col>
            <input
              type="text"
              onChange={(e) => handleCategoryInput("label", e.target.value, index, "checked")}
              style={{
                border: "1px solid black",
                width: "100%",
                boxSizing: "border-box",
                padding: "10px",
                borderRadius: "5px",
                marginTop: "10px",
              }} placeholder={item.label} />
          </Col>
          <Col style={{ marginLeft: "50px" }}>
            <select
              onChange={(e) => {
                handelparentcategoryId,
                  ("parentId", e.target.value, index, "checked")
              }}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid black",
                marginTop: "10px",
                cursor: "pointer",
                width: "100%",
              }}
              value={item.parentId !== undefined ? item.parentId : ""}
              autoFocus={false}
            >
              <option>Select Categories</option>
              {createCategoryList()}
            </select>
          </Col>
          <Col style={{ marginLeft: "50px" }}>
            <select
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid black",
                marginTop: "10px",
                cursor: "pointer",
                width: "100%",
              }}
              onChange={(e) =>  handleCategoryInput("type", e.target.value, index, "checked")}
            >
              <option value="Product">Product</option>
              <option value="Order">Order</option>
              <option value="Cart">Cart</option>
              <option value="Page">Page</option>
            </select>
          </Col>
        </Row>
      ))}
   
    </Modal>); } 
const handleOkWithLogging = () => { handleOk();};
  return (
    <>
      <div style={{padding: "24px"}}>
      <div >
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
        onCheck={(checked) => setChecked(checked)}
        onExpand={(expanded) => setExpanded(expanded)}
        icons={{
          check: <AiFillCheckSquare />,
          uncheck: <IoIosCheckboxOutline />,
          halfCheck: <IoIosCheckboxOutline />,
          expandClose: <MdOutlineArrowForwardIos />,
          expandOpen: <MdKeyboardArrowDown />,
        }}
      />
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button
          onClick={() =>
          {
            handleDelete();
          }}
          style={{ backgroundColor: "red", color: "white", padding: "10px", borderRadius: "10px"}}>
          Delete
        </button>
        <button
          onClick={() => { handleEdit();
          }}
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          Edit
        </button>
      </div>
      <Modal
        okButtonProps={{ style: { backgroundColor: "green" } }}
        set
        okText="Save"
        title={
          <span
            style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}
          >
            Add Category
          </span>
        }
        cancelText="Cancel"
        cancelButtonProps={{
          style: { backgroundColor: "red", color: "white" },
        }}
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
      <Modal
    okButtonProps={{ style: { backgroundColor: "red" } }}
    set
        okText="Yes"
        
    title={
      <span style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}>Conform</span>
    }
    cancelText="No"
    cancelButtonProps={{
      style: { backgroundColor: "green", color: "white" },
    }}
    open={isModalOpen1}
        onOk={handleOk1}
    onCancel={handleCancel1} >
        <h1>Are you sure you want to delete this category</h1>
        <h1>Expanded</h1>
       {expandedArray.length > 0 && expandedArray.map((item, index) => (
         <div key={index}>
           <span>{item.label}</span>
           <br/>
         </div>
       ))}
        <h1>Checked</h1>
       {checkedArray.length > 0 && checkedArray.map((item, index) => (
         <div key={index}>
           <span>{item.label}</span>
           <br/>
         </div>
       ))}
  </Modal>
      {renderUpdateCategoriesModal()}
      {/* <UpdateCategoryModal sendDataToParent={cheker} filler={"Category"} array={checkedArray} /> */}
     </div>
    </>
  );
};
export default Category;
