import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import {Videos,ChannelCard} from './'
import { fetchFromApi } from "../utils/fetchFropApi"

const ChannelDetails = () => {

  const {id}=useParams()
  const [channelDetails, setchannelDetails] = useState(null)
  const [videos,setVideos]=useState([])
  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data)=>setchannelDetails(data.items[0]))
    
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=>setVideos(data?.items))

  },[id])

  console.log(id)

  return (
    <>
      {channelDetails && videos && 
        <Box minHeight="95vh">
          <Box>
            <div
              style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 100%)',zIndex:10,height:'300px' }}      
            />
            <ChannelCard channelDetails={channelDetails} marginTop='-93px' />
          </Box>
          <Box display="flex"  p="2">
            <Box sx={{mr:{sm:"80px",xs:'25px'}}}/>
            <Box>
              <Videos videos={videos} />
            </Box>
          </Box>
        </Box>
      }
    </>
  )
}

export default ChannelDetails