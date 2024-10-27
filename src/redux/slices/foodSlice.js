import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios  from "axios";


 export const fetchAllFoods = createAsyncThunk('foods/fetchAllFood',async()=>{
const result =  await axios.get("https://dummyjson.com/recipes")

sessionStorage.setItem("allFoods",JSON.stringify(result.data.recipes))
console.log(result);
return result.data.recipes

})
const foodSlice = createSlice({
    name:"foods",
    initialState:{
        allFoods:[],
        dummyAllFoods:[],
        loading:false,
        error:""
    },
    reducers:{
searchFood:(state,searchKeyFromHeader)=>{
    state.allFoods = state.dummyAllFoods.filter(item=>item.cuisine.toLowerCase().includes(searchKeyFromHeader.payload))
}

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllFoods.fulfilled,(state,apiResult)=>{
state.allFoods = apiResult.payload
state. dummyAllFoods =apiResult.payload
state.loading= false
state.error= ""
        })
        builder.addCase(fetchAllFoods.pending,(state,apiResult)=>{
            state.allFoods = []
            state. dummyAllFoods =[]
            state.loading= true
            state.error= ""
                    })
                    builder.addCase(fetchAllFoods.rejected,(state,apiResult)=>{
                        state.allFoods = []
                        state. dummyAllFoods =[]
                        state.loading= false
                        state.error= "API Call failed"
                                })
                                       

    }
})

export const {searchFood} = foodSlice.actions
export default foodSlice.reducer