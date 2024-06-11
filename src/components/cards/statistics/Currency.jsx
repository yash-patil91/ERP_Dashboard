import PropTypes from 'prop-types';

// material-ui
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from "react-slick";
import flag from '../../../assets/United States.png'

// project import
import MainCard from 'components/MainCard';


export default function Currency() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };


    return (
        <MainCard contentSX={{ p: 2.25, background: "#3A3A5A" }}>
            <Stack spacing={0.5}>
                <Typography variant="h5" color="white" textAlign={'center'}>
                    Select Currency
                </Typography>
            </Stack>
            <div className="slider-container" style={{padding:"0 1rem",color:"white"}}>
                <Slider {...settings}>
                    <div>
                        <Box sx={{ marginLeft:"1rem",placeItems:"center",display:"grid",gap:"0.3rem",backgroundColor: "#9797EF", borderRadius: "0.5rem", padding: "0.7rem 0.5rem",width:"5rem" }}>
                            <img src={flag} alt="" style={{borderRadius:"50%"}}/>
                            <Typography>$</Typography>
                            <Typography>USD</Typography>
                        </Box>
                    </div>
                    <div>
                        <Box sx={{ marginLeft:"1rem",placeItems:"center",display:"grid",gap:"0.3rem",backgroundColor: "#9797EF", borderRadius: "0.5rem", padding: "0.7rem 0.5rem",width:"5rem" }}>
                            <img src={flag} alt="" style={{borderRadius:"50%"}}/>
                            <Typography>$</Typography>
                            <Typography>USD</Typography>
                        </Box>
                    </div>
                    <div>
                        <Box sx={{ marginLeft:"1rem",placeItems:"center",display:"grid",gap:"0.3rem",backgroundColor: "#9797EF", borderRadius: "0.5rem", padding: "0.7rem 0.5rem",width:"5rem" }}>
                            <img src={flag} alt="" style={{borderRadius:"50%"}}/>
                            <Typography>$</Typography>
                            <Typography>USD</Typography>
                        </Box>
                    </div>
                    <div>
                        <Box sx={{ marginLeft:"1rem",placeItems:"center",display:"grid",gap:"0.3rem",backgroundColor: "#9797EF", borderRadius: "0.5rem", padding: "0.7rem 0.5rem",width:"5rem" }}>
                            <img src={flag} alt="" style={{borderRadius:"50%"}}/>
                            <Typography>$</Typography>
                            <Typography>USD</Typography>
                        </Box>
                    </div>
                    <div>
                        <Box sx={{ marginLeft:"1rem",placeItems:"center",display:"grid",gap:"0.3rem",backgroundColor: "#9797EF", borderRadius: "0.5rem", padding: "0.7rem 0.5rem",width:"5rem" }}>
                            <img src={flag} alt="" style={{borderRadius:"50%"}}/>
                            <Typography>$</Typography>
                            <Typography>USD</Typography>
                        </Box>
                    </div>
                    <div>
                        <Box sx={{ marginLeft:"1rem",placeItems:"center",display:"grid",gap:"0.3rem",backgroundColor: "#9797EF", borderRadius: "0.5rem", padding: "0.7rem 0.5rem",width:"5rem" }}>
                            <img src={flag} alt="" style={{borderRadius:"50%"}}/>
                            <Typography>$</Typography>
                            <Typography>USD</Typography>
                        </Box>
                    </div>
                </Slider>
            </div>
        </MainCard>
    );
}
