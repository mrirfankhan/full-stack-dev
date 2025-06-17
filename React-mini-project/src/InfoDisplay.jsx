import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Searchbox.css";

export default function Display({ info }) {
    const init_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKyZ1yU2Rzv8LAB1IebF0bSBxSqWc1ucgjQw&s";

    return (
        <div>
            <h2>City Information</h2>
            <div className="container">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={init_url}
                        title="Weather"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.City}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Weather: {info.weather}
                            <br />
                            Temperature: {info.temp}°C
                            <br />
                            Feels Like: {info.feelslike}°C
                            <br />
                            Min: {info.tempMin}°C / Max: {info.tempMax}°C
                            <br />
                            Humidity: {info.temphumidity}%
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
