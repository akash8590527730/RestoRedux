import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'


const View = () => {
  const {id} = useParams()
  console.log(id);
const[food,setFood] = useState({})

// console.log(allFoods,loading,error);
  useEffect(()=>{
   if(sessionStorage.getItem("allFoods")){
    const allFoods = JSON.parse(sessionStorage.getItem("allFoods"))
    setFood(allFoods?.find(item=>item.id==id))
   }
  },[])
  console.log(food);
  


  return (
    <>
    <Header />
    <div
  style={{ paddingTop: '70px' }}
  className="flex justify-center items-center min-h-screen mx-5 bg-gray-100"
>
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-5xl p-5 bg-white rounded-lg shadow-lg">
    <img
      width={'100%'}
      height={'500px'}
      src={food?.image}
      alt=""
      className="w-full h-auto object-cover rounded-lg shadow-md"
    />
    <div className="space-y-4">
      <h3 className="text-gray-600">PID : {food?.id}</h3>
      <h1 className="text-2xl font-bold text-gray-800">{food?.name}</h1>
      <h1 className="text-4xl font-bold text-indigo-600">{food?.cuisine} Dish</h1>
      <p className="text-gray-700">
        <span className="font-bold">Ingredients:</span> {food?.ingredients}
      </p>
      <p className="text-gray-700">
        <span className="font-bold">Instructions:</span> {food?.instructions}
      </p>
      <p className="text-gray-700">
        <span className="font-bold">Preparation Time:</span> {food?.prepTimeMinutes} min
      </p>
      <div class="bg-gray-100 border border-gray-200 rounded-lg p-4 mb-4 shadow-md max-w-xs">
  <h5 class="text-lg text-gray-800 mb-2">
    <span class="font-bold">Review Count:</span> {food?.reviewCount}
  </h5>
  <p class="text-gray-700">
    Rating: <span class="text-yellow-500 font-semibold">{food?.rating}</span> 
    <i class="fa-solid fa-star text-yellow-500 ml-1"></i>
  </p>
</div>


    </div>
  </div>
</div>

  </>
  )
}

export default View