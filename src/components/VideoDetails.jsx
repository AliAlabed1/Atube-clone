import React from 'react'
import { useState,useEffect } from 'react'
import ReactPlayer from 'react-player'
import { Typography,Box,Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {Videos} from './'
import { fetchFromApi } from '../utils/fetchFropApi'
import { Link, useParams } from 'react-router-dom'

const VideoDetails = () => {
  const{id}=useParams();
  const [videoDetail, setvideoDetail] = useState(null)
  const [relatedVideos, setrelatedVideos] = useState(null)
  useEffect(()=>{
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).
    then((data)=>setvideoDetail(data.items[0]))

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).
    then((data)=>setrelatedVideos(data.items))
  },[id])
  
  if (!videoDetail||!relatedVideos) return 'Loading'

  const {snippet:{title,channelId,channelTitle,description},statistics:{viewCount,likeCount,commentCount}}=videoDetail
  return (
    <Box minHeight={"98vh"}>
      <Stack direction={{xc:'column',md:'row'}}>
        <Box flex={1} sx={{position:'sticky',top:0}}>
          <Box className='player_box' sx={{width:'100%'}}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color='#FFF' variant='h5' fontWeight={'bold'} p={2}>
              {title}
            </Typography>
            <Stack direction={'row'} justifyContent={'space-between'} sx={{
              color:'#fff'
            }} py={1} px={2}
            >
              <Link  to={`/channel/${channelId}`}>
                <Typography varient={{sm:'subtitle1',md:'h6'}} color='#fff' >
                 {channelTitle} 
                 <CheckCircle sx={{fontSize:'12px',marginLeft:'6px',color:'gray'}}/>
                </Typography>
              </Link>
              <Stack direction={'row'} gap='25px' >
                <Typography varient='body1' sx={{opaticy:'0.7'}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography varient='body1' sx={{opaticy:'0.7'}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>

              </Stack>
            </Stack>

          </Box>
        </Box>
        <Box px={2} py={{md:1,xs:5}} justifyContent={'center'} alignItems={'center'}>
          <Videos videos={relatedVideos} direction='column'/>
        </Box>
      </Stack>
      
    </Box>
  )
}

export default VideoDetails