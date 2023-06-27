import { Link } from "react-router-dom"
import { Typography ,Card ,CardContent,CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl ,demoVideoUrl,demoVideoTitle,demoChannelTitle,demoChannelUrl } from "../utils/constant"

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
    <Card sx={{width:{md:'300px',sm:'100%'},boxShadow:'none',borderRadius:'none'}}>
      <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
        <CardMedia
         image={snippet?.thumbnails?.high?.url} 
         alt={snippet?.title}
         sx={{
          width:'100%',
          height:'160px'
         }}
        />
      </Link>
      <CardContent 
        sx={{backgroundColor:"#1e1e1e",height:'106px'}}
      >
        <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight={'bold'} color='#FFF'>
            {
              snippet?.title?.slice(0,25) || demoVideoTitle.slice(0,40)
            }...
          </Typography>
        </Link>
        <Link to={snippet.channelId? `/channel/${snippet.channelId}`:demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight={'bold'} color='gray'>
            {
              snippet?.channelTitle|| demoVideoTitle
            }
            <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard