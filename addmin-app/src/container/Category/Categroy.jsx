import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getCategory } from "../../actions/category"
import { useSelector } from "react-redux"
//categories
const Categroy = () => {
  const category = useSelector((state) => state.categroy);
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getCategory())})
  const renderCategories = (cate) => {
    let myCategories = [];
    for (let category of cate) {
      myCategories.push(
        <li >{category.name}</li>
      )
    }
    console.log(myCategories)
    return myCategories
  }
  return (
    <>
     <div style={{ alignItems: 'center', display: 'flex', zIndex: '1', justifyContent: 'space-between', backgroundColor: '#001529', color: 'white', padding: '10px' }}>
      <h1>Category</h1>
      <button>Add</button>
      </div>
      <div>
        <ul>
          {renderCategories(category.categories)}
        </ul>
    </div>
    </>

  )
}

export default Categroy
