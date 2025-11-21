import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
export default function InfoBox({ info }) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1719606208342-773583a8d23d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHVzdHklMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";


    const HOT_URL = "https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1700996706577-c299866f294e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    

    return (
        <div className="InfoBox">
            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <p>Temperature: {info.temp} °C<br/></p>
            <p>Feels Like: {info.feelslike} <br/></p>
            <p>Humidity: {info.humidity} %<br/></p>
            <p>Max Temperature: {info.tempMax} <br/></p>
            <p>Min Temperature: {info.tempMin} <br/></p>
            <p>The WEATHER can be Described like: <i>{info.weather}</i></p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
        </div>
    );
}
