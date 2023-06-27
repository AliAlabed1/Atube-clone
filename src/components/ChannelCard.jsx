import { Box ,CardContent,CardMedia,Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoChannelTitle, demoProfilePicture } from "../utils/constant"

const ChannelCard = ({channelDetails,marginTop}) => {
  console.log(channelDetails)
  return (
    <Box
      sx={{
        width:{md:'300px',xs:'100%'},
        boxShadow:'none',borderRadius:'none',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        heigth:'326px',
        margin:'auto',
        marginTop:{marginTop}
      }}
    >
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent
          sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            textAlign:'center',
            color:'#FFF'
          }}
        >
          <CardMedia
            image={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetails.snippet?.title}
            sx={{
              borderRadius:'50%',
              height:'180px',
              width:'180px'
            }}
          />
        </CardContent>
        <Typography variant="h6" fontWeight={'bold'} color='white'>
          {channelDetails?.snippet?.title || demoChannelTitle }
          <CheckCircle sx={{fontSize:14,color:'gray',ml:'5px'}}/>
        </Typography>
        {channelDetails?.statistics?.subscriberCount && (
          <Typography variant="h6"  color='gray'>
            {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()} Subsecribers
          </Typography>
        )}
      </Link>
    </Box>
  )
}

export default ChannelCard