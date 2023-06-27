import { useState,useEffect } from "react"
import { Box ,Typography } from "@mui/material"
import {Videos} from "./"
import { fetchFromApi } from "../utils/fetchFropApi"
import { useParams } from "react-router-dom"

const SearchFeed = () => {


  const {searchTerm}=useParams()
  const [videos, setvideos] = useState([])

  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data)=>{
      setvideos(data.items)
    })
  },[searchTerm])
  return (
    <Box p={2} sx={{overflowY:'auto' ,height:'90vh', flex:2}}>
      <Typography variant="h4" fontWeight='bold' mb={2} sx={{color:'white'}}>
        Search Results For <span style={{color:'#F31503'}}>
          {searchTerm}
        </span>
      </Typography>
      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed