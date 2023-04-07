import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Stack } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BarChart from '../../charts/BarChart';
import CountUp from 'react-countup';

function HomeAdmin() {
    return (
        <>
           
                <Box component="main" sx={{ flexFlow: 1, p: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Stack spacing={2} direction={'row'}>
                                <Card sx={{ minWidth: 49 + '%', height: 170 }} className="gadiant">
                                    <CardContent>
                                        <div>
                                            <CreditCardIcon sx={{ fontSize: 30, color: '#ffffff' }} />
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ffffff' }}>
                                            $<CountUp delay={0.4} end={17000} duration={0.6} />
                                        </Typography>
                                        <Typography gutterBottom variant="body2" sx={{ color: '#ffffff' }}>
                                            Total Earning
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card sx={{ minWidth: 49 + '%', height: 170 }} className="gadiantlight">
                                    <CardContent>
                                        <div>
                                            <ShoppingBagIcon sx={{ fontSize: 30, color: '#ffffff' }} />
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ffffff' }}>
                                            $<CountUp delay={0.4} end={12000} duration={0.6} />
                                        </Typography>
                                        <Typography gutterBottom variant="body2" sx={{ color: '#ffffff' }}>
                                            Total Oders
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>

                        <Grid item xs={4}>
                            <Stack spacing={2}>
                                <Card sx={{ height: 80 }} className="gadiantlight">
                                    <CardContent>
                                        <Stack spacing={2} direction="row">
                                            <div className="iconSt">
                                                <StorefrontIcon sx={{ fontSize: 30, color: '#ffffff' }} />
                                            </div>
                                            <div className="paddingAll">
                                                <span style={{ color: '#ffffff' }}>
                                                    $<CountUp delay={0.4} end={102000} duration={0.6} />
                                                </span>
                                                <br />
                                                <span style={{ color: '#ffffff' }}>Total</span>
                                            </div>
                                        </Stack>
                                    </CardContent>
                                </Card>
                                <Card sx={{ height: 80 }}>
                                    <CardContent>
                                        <Stack spacing={2} direction="row">
                                            <div className="iconSt">
                                                <StorefrontIcon sx={{ fontSize: 30 }} />
                                            </div>
                                            <div className="paddingAll">
                                                <span>
                                                    $ <CountUp delay={0.4} end={32000} duration={0.3} />
                                                </span>
                                                <br />
                                                <span>Total</span>
                                            </div>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box height={20} />
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Card sx={{ height: 60 + 'vh' }}>
                                <CardContent>
                                    <BarChart />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ height: 60 + 'vh' }}>
                                <CardContent>
                                    <div className="paddingAll">
                                        <span className="pricetitle">Popular Products</span>
                                    </div>
                                    <Box height={10} />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </>
    );
}

export default HomeAdmin;
