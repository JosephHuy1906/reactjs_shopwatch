import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function Regin() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [errors, setErrors] = useState('');
    const [test, setTest] = useState('');

    const handleFullName = (e) => {
        setFullName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleRepassword = (e) => {
        setRepassword(e.target.value);
    };

    const apiEmail = async () => {
        await axios
            .get('http://localhost:6060/user/email/' + email)
            .then((res) => setTest(res.data))
            .catch((err) => console.log(err));
    };
    const addUser = async (data) => {
        await axios
            .post('http://localhost:6060/user/create', data)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        apiEmail();
    }, [email]);
    const submit = (e) => {
        e.preventDefault();

        if (fullName == '' || email == '' || password == '' || repassword == '') {
            setErrors('Vui lòng điền đầy đủ!');
        } else if (test.length > 0) {
            setErrors('Email này đã đăng ký');
        } else if (password !== repassword) {
            setErrors('Password nhập lại không đúng');
        } else {
            const user = {
                fullName: fullName,
                email: email,
                password: password,
            };
            console.log(user);
            addUser(user);
            Swal.fire('Submitted!', 'Your file has been submitted.', 'success');
            setErrors('');
        }
    };
    return (
        <>
            <div className="login">
                <div className="login-left">
                    <h2>Sign Up</h2>
                    <form onSubmit={submit}>
                        <p className="err">{errors}</p>
                        <label htmlFor="fullName">Full Name</label>
                        <br />
                        <input type="text" id="fullName" onChange={handleFullName} value={fullName} /> <br />
                        <br />
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" id="email" onChange={handleEmail} value={email} />
                        <br />
                        <br />
                        <label htmlFor="password">Password</label>
                        <br />
                        <input type="password" id="password" onChange={handlePassword} value={password} />
                        <br />
                        <br />
                        <label htmlFor="repassword">Repassword</label>
                        <br />
                        <input type="password" id="repassword" onChange={handleRepassword} value={repassword} />
                        <br />
                        <br />
                        <button type="submit">Sign Up</button>
                    </form>
                    <p>Or Sign up with</p>
                    <a href="">
                        <img src="images/facebook.png" alt="" />
                    </a>
                    <a href="">
                        <img src="images/gmail.png" alt="" />
                    </a>
                </div>
                <div className="login-right">
                    <img src="images/undraw_file_sync_ot38.svg" alt="" />
                </div>
            </div>
        </>
    );
}

export default Regin;
