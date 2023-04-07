import axios from 'axios';
import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';

function OderUser() {
    const [profile, setProfile] = useState([]);
    const [userId, setUserId] = useState('');
    const [data, setData] = useState([]);
    const [oder, setOder] = useState([]);

    const token = localStorage.getItem('token');

    const parseToken = async () => {
        await axios
            .get('http://localhost:6060/user/profile/' + token)
            .then((res) => {
                setProfile(res.data);
                setUserId(res.data.userId);
            })
            .catch((err) => console.log(err));
    };
    const deatilUser = async () => {
        await axios
            .get('http://localhost:6060/user/id/' + userId)
            .then((res) => {
                setData(res.data[0]);
            })
            .catch((err) => console.log(err));
    };

    const showOder = async () => {
        await axios
            .get('http://localhost:6060/oder/id/' + userId)
            .then((res) => {
                setOder(res.data);
            })
            .catch((err) => console.log(err));
    };
    useEffect( ()=>{
        parseToken();
    },[])

    useEffect(() => {
        deatilUser();
    }, [profile]);

    
    useEffect(() => {
        showOder();
    }, [profile,oder]);



    return (
        <div className="profile-right">
            {oder.map((data, index) => {
                return (
                    <div className="oder" key={index}>
                        <div className="od">
                            <h4>Oder</h4>
                            <div className="center">
                                <p>#{data.oderId}</p>
                                <b>Date Create: {data.date_creat}</b>
                            </div>
                        </div>

                        <div className="total">
                            <p className="totals">
                                Total:{' '}
                                <NumericFormat value={data.total} displayType={'text'} thousandSeparator={true} />
                            </p>
                            <p className="status">{data.status}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default OderUser;
