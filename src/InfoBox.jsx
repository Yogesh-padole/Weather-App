import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";


export default function InfoBox({info}){
    const INIT_URL ="https://plus.unsplash.com/premium_photo-1670527200668-ad4b53a1aefb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYXIlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const Hot_URL ="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const cold_URL ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const Rain_URL ="https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";



    return(
        <div className="infoBox">
            <h2>Weather Info :</h2>
            <div className='card'>
            <Card sx={{ maxWidth: 545 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? Rain_URL :info.temp>15 ? Hot_URL : cold_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          

        </Typography>
        <h5>Temperature : {info.temp}</h5>
          <h5>Humedity : {info.humidity}</h5>
          <h5>Feels Like : {info.feelsLike}</h5>
          <h5>Max Temperature : {info.tempMax}</h5>
          <h5>Min Temperature : {info.tempMin}</h5>
          <h5>Weather :{info.weather}</h5>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}