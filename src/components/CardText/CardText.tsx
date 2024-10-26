import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface CardTextProps {
    text: string;
    imageNumber: string;
}

const CardText = ({ text, imageNumber }: CardTextProps) => {
    return (
        <Card sx={{ display: "flex", flexDirection: "row", boxShadow: '0', backgroundColor: "#F5F5F5" }}>
            <CardMedia
                sx={{ height: 180, minWidth: "250px", borderRadius: "14px" }} // Opcional: Estilo personalizado
                image={`/photo_${imageNumber}@2x.png`}
                title='image'
            />
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: "600" }}>{text}</Typography>
                <Typography variant="body2">November 12, 2024</Typography>
            </CardContent>
        </Card>
    )
}

export default CardText
