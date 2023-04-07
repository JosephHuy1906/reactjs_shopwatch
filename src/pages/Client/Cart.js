import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';


function Cart() {
    const [item, setItem] = useState([]);
    const [total, setTotal] = useState();
    const cart = JSON.parse(localStorage.getItem('cart'));

    const tinh = cart.reduce((sp, item) => sp + item.total, 0);

    useEffect(() => {
        setItem(cart);
        setTotal(tinh);
    }, []);

    const removeItem = (item) => {
        let getSP = localStorage.getItem('cart');
        let cart = JSON.parse(getSP);
        if (window.confirm('Bạn có muốn xoá không?') === true) {
            let filtered = cart.filter((items) => items.id !== item.id);
            localStorage.setItem('cart', JSON.stringify(filtered));
            window.location.reload(true);
        }
    };

    return (
        <>
            <div className="cart">
                <h2>Shopping Cart</h2>
                <br />
                {cart ? (
                    <div className="shop-cart">
                        <div className="carts">
                            {item.map((data, index) => {
                                return (
                                    <div key={index} className="item">
                                        <img src={'/images/' + data.image} alt="" />
                                        <h4>{data.name}</h4>
                                        <div className="btn-up-down">
                                            <button>-</button>
                                            <input type="number" defaultValue={data.quatity} />
                                            <button>+</button>
                                        </div>
                                        <p>
                                            <NumericFormat
                                                defaultValue={data.total}
                                                displayType="text"
                                                thousandSeparator={true}
                                                prefix={'đ'}
                                            />
                                        </p>
                                        <a onClick={() => removeItem(data)}>
                                            <i className="fa-solid fa-trash"></i>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="shop-total">
                            <h4>Summary</h4>
                            <hr />
                            <div className="total-item">
                                <p className="left">Products</p>
                                <p className="right">
                                    <NumericFormat
                                        value={total || '0'}
                                        displayType="text"
                                        thousandSeparator={true}
                                        prefix={'đ'}
                                    />
                                </p>
                                <p className="left">Shipping</p>
                                <p className="right">Gratis</p>
                            </div>
                            <hr />
                            <div className="total-item">
                                <b className="left">Total amount</b>
                                <b className="right">
                                    <NumericFormat
                                        value={total || '0'}
                                        displayType="text"
                                        thousandSeparator={true}
                                        prefix={'đ'}
                                    />
                                </b>
                            </div>
                            <br />
                            <Link to="/checkout">Go to checkout</Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <h2>rỗng</h2>
                    </>
                )}
            </div>
        </>
    );
}

export default Cart;
