
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { set_user_auth } from '../store/slices/user_data_slice';
import { useDispatch, useSelector } from "react-redux";
import { auth } from '../config/firebase-config/index';





const Products = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user_data = useSelector((store) => store.user_data);



  const logout_handle = () => {
    signOut(auth).then(() => {
      dispatch(set_user_auth(false))
      navigate('/')


    })
  }

 

  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>


     <div>

        <div>
      

            {user_data.isLoggedIn ? (
              <div className="space-x-3 text-white font-medium">
                  <h1 className="text-2xl font-bold mb-4">Product List</h1>
            <div className="flex flex-wrap gap-4"> 
              {products.map((product) => (
                <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
                 
                  <Link to={`/item/${product.id}`}>
                    <Cards
                      title={product.title}
                     
                      price={product.price}
                      image={product.image}
                    />

                  </Link>
                </div>
              ))}
            </div>


                <button onClick={logout_handle} >
                  Logout
                </button>
              </div>
              ) : (
                <div className="space-x-3 text-white font-medium">
                 <Redirect to="/" />
                </div>
              )}
          </div>
        
      </div>
      <div>
        <button className='bg-primary_color w-full py-3  font-bold rounded-md' onClick={logout_handle} >
          Logout
        </button></div>


     
    </div>
  );
};



export default Products
