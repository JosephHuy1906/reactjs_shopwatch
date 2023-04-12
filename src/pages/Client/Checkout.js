import { Box, Paper, Skeleton } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Cart() {
    const [item, setItem] = useState([]);
    const [total, setTotal] = useState();
    const [profile, setProfile] = useState([]);
    const [userId, setUserId] = useState('');
    const [OderId, setOderId] = useState('');
    const [data, setData] = useState([]);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAdress] = useState('');


    const cart = JSON.parse(localStorage.getItem('cart'));
    const token = localStorage.getItem('token');
    const tinh = cart.reduce((sp, item) => sp + item.total, 0);
    const navigate = useNavigate();
    useEffect(() => {
        parseToken();
        setItem(cart);
        setTotal(tinh);
        OderUs();
    }, []);
    useEffect( ()=>{
        deatilUser();
    }, [profile])
    console.log(data);
    const parseToken = async () => {
        await axios.get('http://localhost:6060/user/profile/' + token).then((res) => {
            setProfile(res.data);
            setUserId(res.data.userId);
        });
    };

    const deatilUser = async () => {
        await axios.get('http://localhost:6060/user/id/' + userId).then((res) => {
            setData(res.data);
        });
    };

    const UpdateUser = async (data) => {
        await axios
            .put('http://localhost:6060/user/update/role/' + userId, data)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };
    const addOder = async (data) => {
        await axios
            .post('http://localhost:6060/oder/create', data)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };
    const addOderDetail = async (data) => {
        await axios
            .post('http://localhost:6060/oderdetai/create', data)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };
    const OderUs = () => {
        const result = Math.random().toString(36).substring(2, 9);
        console.log(result);
        setOderId(result);
    };

    const submit = (e) => {
        e.preventDefault();
        const user = {
            fullName: fullName,
            Phone: phone,
            address: address,
            email: email,
        };
        const us1 = {
            Phone: phone,
            address: address,
        };
        const Oder = {
            OderId: OderId,
            address: data.address,
            phone: data.Phone,
            price: total,
            userId: userId,
            statusId: 1,
        };
        const OderDetail = {
            OderId: OderId,
        };

        console.log(user);
        if (data.Phone !== null && data.address !== null) {
            addOder(Oder);
            console.log(Oder);
            console.log(OderDetail);
            item.map((data) => {
                addOderDetail({
                    oderId: OderId,
                    productId: data.id,
                    price: data.price,
                    quantity: data.quatity,
                });
            });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Thank you for your purchase',
                showConfirmButton: false,
                timer: 1500,
            });
            navigate('/');
        } else if (phone == '' && address == '') {
            console.log('phải điền đầy đủ');
        } else if (address !== '' && phone !== '') {
            console.log(us1);
            UpdateUser(us1);
        }
    };
    return (
        <>
            <div className="checkout">
                <form onSubmit={submit}>
                    {data.length > 0 && (
                        <div className="checkout-left">
                            <h3>Delivery information</h3>

                            <div className="col-12">
                                <div className="checkout-form">
                                    <label htmlFor="fullname">Full name</label>
                                    <br />
                                    <input
                                        defaultValue={data[0].fullName}
                                        onChange={(e) => {
                                            setFullName(e.target.value);
                                        }}
                                    />
                                    <br />
                                </div>
                                <div className="checkout-form">
                                    <label htmlFor="phone">Phone</label>
                                    <br />
                                    <input
                                        defaultValue={data[0].Phone}
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>

                            <label htmlFor="email">Email</label>
                            <br />
                            <input
                                type="email"
                                id="email"
                                defaultValue={data[0].email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                            <br />
                            <label htmlFor="Address">Address</label>
                            <br />
                            <textarea
                                type="text"
                                id="Address"
                                defaultValue={data[0].address}
                                onChange={(e) => {
                                    setAdress(e.target.value);
                                }}
                            />
                            <br />
                            <br />
                            <h3>Payments</h3>
                            <div className="pay">
                                <div className="pay-item">
                                    <label htmlFor="check">
                                        <img src="images/pay.png" alt="" />
                                        Payment on delivery
                                    </label>
                                    <input type="radio" id="check" />
                                </div>
                                <div className="pay-item">
                                    <label htmlFor="check-momo">
                                        <img src="images/momo.png" alt="" />
                                        E-wallet momo
                                    </label>
                                    <input type="radio" id="check-momo" />
                                </div>
                            </div>
                        </div>
                    )}
                    {data.length == 0 && (
                        <Paper sx={{ width: '98%', overflow: 'hidden', padding: '12px' }}>
                            <Box height={20} />
                            <Skeleton variant="rectangular" width={'100%'} height={30} />
                            <Box height={20} />
                            <Skeleton variant="rectangular" width={'100%'} height={60} />
                            <Box height={20} />
                            <Skeleton variant="rectangular" width={'100%'} height={60} />
                            <Box height={20} />
                            <Skeleton variant="rectangular" width={'100%'} height={60} />
                            <Box height={20} />
                            <Skeleton variant="rectangular" width={'100%'} height={60} />
                            <Box height={20} />
                            <Skeleton variant="rectangular" width={'100%'} height={60} />
                            <Box height={20} />
                        </Paper>
                    )}
                    <div className="checkout-right">
                        <h3>Order summary</h3>
                        <div className="checkout-all">
                            {item.map((el, index) => {
                                return (
                                    <div key={index} className="oder-item">
                                        <img src={'/images/' + el.image} alt="" />
                                        <div className="item-title">
                                            <h4>{el.name}</h4>
                                            <p className="status">Quantity: {el.quatity}</p>
                                            <p className="price">
                                                <NumericFormat
                                                    value={el.total}
                                                    displayType="text"
                                                    thousandSeparator={true}
                                                    prefix={'đ'}
                                                />
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="oder-total">
                            <p>Total</p>
                            <p className="right">
                                <NumericFormat value={total} displayType="text" thousandSeparator={true} prefix={'đ'} />
                            </p>
                        </div>
                        <button onClick={submit}>Confirm Oder</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Cart;
