import axios from "axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";
import addCart from "../../components/Cart";

function Home() {
    const [productBest, setProductBest] = useState([]);
    const [productHot, setproductHot] = useState([]);

    useEffect(() => {
        productBs();
        productHt();
    }, []);

    const productBs = async () => {
        await axios.get('http://localhost:6060/apiproduct/best').then((res) => {
            setProductBest(res.data);
        });
    };
    const productHt = async () => {
        await axios.get('http://localhost:6060/apiproduct/cate1').then((res) => {
            setproductHot(res.data);
        });
    };
    return ( 
        <>
        <div className="banner">
            <div className="banner-left">
                <p>Hey!</p>
                <h2>WellCome Huy Watch Store</h2>
                <h3>
                    Huy Watch Store is a shop that sells genuine watches with the cheapest, most beautiful and best
                    quality in the market
                </h3>
                <button>See More</button>
            </div>
            <div className="banner-right">
                <p></p>
            </div>
        </div>

        <div className="best-seller">
            <div className="title">
                <h2>Best Seller</h2>
                <button>See</button>
            </div>
            <div className="best-product">
                {productBest.map((data, index) => {
                    return (
                        <div className="item" key={index}>
                            <img src="./images/best-seller.png" alt="" className="icon-best" />
                            <img src={'./images/' + data.avatar} alt="" />
                            <div className="item-title">
                                <h3>{data.name}</h3>
                                <p>
                                    <NumericFormat
                                        value={data.price}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'đ'}
                                    />
                                </p>
                            </div>
                            <Link to={'/productdetail/' + data.productId}>
                                <i className="fa-solid fa-eye"></i> View product
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>

        <div className="hot-product">
            <div className="title">
                <h2>Product Hot</h2>
                <button>See</button>
            </div>
            <div className="product-item">
                {productHot.map((data, index) => {
                    return (
                        <div className="item" key={index}>
                            <img src="./images/promotional.png" alt="" className="icon-hot" />
                            <img src={'images/' + data.avatar} alt="" />
                            <div className="item-title">
                                <h3>{data.name}</h3>
                                <p>
                                    <NumericFormat
                                        value={data.price}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'đ'}
                                    />
                                </p>
                            </div>
                            <Link to={'/productdetail/' + data.productId}>
                                <i className="fa-solid fa-eye"></i>
                            </Link>
                            <a onClick={() => addCart(data)}>
                                <i className="fa-solid fa-cart-arrow-down"></i>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>

        <div className="contact-email">
            <h2>What problem do you have?</h2>
            <div className="contact-btn">
                <Link to="">
                    <i className="fa-solid fa-envelope"></i> Email me
                </Link>
                <button>See more product</button>
            </div>
        </div>

        <nav className="category-product">
            <ul>
                <li>
                    <img src="images/logo_CARNIVAL.png" alt="" />
                </li>
                <li>
                    <img src="images/logo_LOBINNI.png" alt="" />
                </li>
                <li>
                    <img src="images/logo_TEINTOP.png" alt="" />
                </li>
                <li>AOUKE</li>
            </ul>
        </nav>
    </>
     );
}

export default Home;