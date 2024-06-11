import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress'


function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }} >
            <Box sx={{ width: '100%', mr: 1 }} className="linear_progress">
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {

    value: PropTypes.number.isRequired,
};


export default function Progressbar() {
    return (
        <div style={{display:"grid",gap:"1rem",marginTop:"1rem"}}>
            <Grid container>
                <Grid item xs={2} md={1} >
                <Box sx={{height:"2.4rem",width:"2.4rem",background:"white",borderRadius:"0.5rem"}}></Box>
                </Grid>
                <Grid item xs={10}>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgressWithLabel value={52} />
                    </Box>
                    <Box>
                        <Typography color='#AEAEAE'>Shopping</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={2} md={1}>
                <Box sx={{height:"2.4rem",width:"2.4rem",background:"white",borderRadius:"0.5rem"}}></Box>
                </Grid>
                <Grid item xs={10}>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgressWithLabel value={21} />
                    </Box>
                    <Box>
                        <Typography color='#AEAEAE'>Electronics</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={2} md={1}>
                <Box sx={{height:"2.4rem",width:"2.4rem",background:"white",borderRadius:"0.5rem"}}></Box>
                </Grid>
                <Grid item xs={10}>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgressWithLabel value={71} />
                    </Box>
                    <Box>
                        <Typography color='#AEAEAE'>Travel</Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}
