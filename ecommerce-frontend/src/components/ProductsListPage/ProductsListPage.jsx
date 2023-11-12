import Navbar from '../Navbar/Navbar'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProductsBySlug } from '../../actions/product';
function ProductsListPage() {
  const {slug} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsBySlug(slug));
    })
  return (
    <div>
          <Navbar />
          <div>
              ProductsLists 
          </div>
    </div>
  )
}

export default ProductsListPage
