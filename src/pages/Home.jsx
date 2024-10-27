import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllFoods } from '../redux/slices/foodSlice'

const Home = () => {
    const disPatch = useDispatch()
     
   const{allFoods,loading,error}= useSelector(state=>state.foodReducer)
console.log(allFoods,loading,error);


    useEffect(()=>{
disPatch(fetchAllFoods())
    },[])
  return (
    <>
    <Header insideHome={true}/>
 <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
  { 
  loading ?
  <div className='flex justify-center items-center my-5 text-lg'>
    <img width={"70px"} height={"70px"} className='me-2' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" /> Loading...

  </div>
  :

  <>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-6">
  {allFoods?.length > 0 ? (
    allFoods.map((foods) => (
      <div
        key={foods?.id}
        className="rounded-lg border border-gray-200 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
        <img
          width="100%"
          height="200px"
          src={foods?.image}
          alt={foods?.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{foods?.name}</h3>
          <h3 className="font-semibold text-gray-600 mb-4">{`${foods?.cuisine} Dish`}</h3>
          <Link
            to={`${foods?.id}/view`}
            className="bg-yellow-600 hover:bg-yellow-700 rounded px-3 py-2 text-white text-sm font-medium inline-block transition-colors duration-200"
          >
            View More
          </Link>
        </div>
      </div>
    ))
  ) : (
    <div className="col-span-4 text-center text-gray-600 text-lg">No Products Found</div>
  )}
</div>

    </>}
 </div>
    </>
  )
}

export default Home