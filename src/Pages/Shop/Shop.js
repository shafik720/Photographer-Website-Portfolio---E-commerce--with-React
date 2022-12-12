import React from 'react';
import { Spinner } from 'react-bootstrap';
import useProduct from '../../utilities/Hooks/useProduct';
import ShopProuduct from '../MyShop/ShopProuduct/ShopProuduct';
import './Shop.css';

const Shop = (props) => {
    const [product, setProduct] = useProduct();

    //--- This function will show only 'Urban' catagory
    function showUrban() {
        const spinner = document.querySelector('.spinners');
        spinner.classList.remove('hideMe');

        setTimeout(() => {
            spinner.classList.add('hideMe');
            const allProductDiv = document.querySelector('.all-product');
            allProductDiv.classList.add('hideMe');
            
            const wildDiv = document.querySelector('.wild-product');
            wildDiv.classList.add('hideMe');

            const streetDiv = document.querySelector('.street-product');
            streetDiv.classList.add('hideMe');

            const citylifeDiv = document.querySelector('.citylife-product');
            citylifeDiv.classList.add('hideMe')

            const othersDiv = document.querySelector('.others-product');
            othersDiv.classList.add('hideMe');

            const urbanDiv = document.querySelector('.urban-product');
            urbanDiv.classList.remove('hideMe');
        }, 500);
    }

    //--- This function will show only 'Street' catagory
    function showStreet() {
        const spinner = document.querySelector('.spinners');
        spinner.classList.remove('hideMe');

        setTimeout(() => {
            spinner.classList.add('hideMe');

            const allProductDiv = document.querySelector('.all-product');
            allProductDiv.classList.add('hideMe');

            const urbanDiv = document.querySelector('.urban-product');
            urbanDiv.classList.add('hideMe');
            
            const wildDiv = document.querySelector('.wild-product');
            wildDiv.classList.add('hideMe');

            const citylifeDiv = document.querySelector('.citylife-product');
            citylifeDiv.classList.add('hideMe');

            const othersDiv = document.querySelector('.others-product');
            othersDiv.classList.add('hideMe');

            const streetDiv = document.querySelector('.street-product');
            streetDiv.classList.remove('hideMe');
        }, 500);
    }

    //--- This function will show only 'Wild Div' catagory
    function showWild() {
        const spinner = document.querySelector('.spinners');
        spinner.classList.remove('hideMe');

        setTimeout(() => {
            spinner.classList.add('hideMe');

            const allProductDiv = document.querySelector('.all-product');
            allProductDiv.classList.add('hideMe');

            const urbanDiv = document.querySelector('.urban-product');
            urbanDiv.classList.add('hideMe');

            const streetDiv = document.querySelector('.street-product');
            streetDiv.classList.add('hideMe');

            const citylifeDiv = document.querySelector('.citylife-product');
            citylifeDiv.classList.add('hideMe');

            const othersDiv = document.querySelector('.others-product');
            othersDiv.classList.add('hideMe');
            
            const wildDiv = document.querySelector('.wild-product');
            wildDiv.classList.remove('hideMe');

        }, 500);
    }

    //--- This function will show only 'Citylife Div' catagory
    function showCitylife() {
        const spinner = document.querySelector('.spinners');
        spinner.classList.remove('hideMe');

        setTimeout(() => {
            spinner.classList.add('hideMe');

            const allProductDiv = document.querySelector('.all-product');
            allProductDiv.classList.add('hideMe');

            const urbanDiv = document.querySelector('.urban-product');
            urbanDiv.classList.add('hideMe');

            const streetDiv = document.querySelector('.street-product');
            streetDiv.classList.add('hideMe');
            
            const wildDiv = document.querySelector('.wild-product');
            wildDiv.classList.add('hideMe');

            const othersDiv = document.querySelector('.others-product');
            othersDiv.classList.add('hideMe');

            const citylifeDiv = document.querySelector('.citylife-product');
            citylifeDiv.classList.remove('hideMe');

        }, 500);
    }

    //--- This function will show only 'Others Div' catagory
    function otherslife() {
        const spinner = document.querySelector('.spinners');
        spinner.classList.remove('hideMe');

        setTimeout(() => {
            spinner.classList.add('hideMe');

            const allProductDiv = document.querySelector('.all-product');
            allProductDiv.classList.add('hideMe');

            const urbanDiv = document.querySelector('.urban-product');
            urbanDiv.classList.add('hideMe');

            const streetDiv = document.querySelector('.street-product');
            streetDiv.classList.add('hideMe');
            
            const wildDiv = document.querySelector('.wild-product');
            wildDiv.classList.add('hideMe');

            const citylifeDiv = document.querySelector('.citylife-product');
            citylifeDiv.classList.add('hideMe');

            const othersDiv = document.querySelector('.others-product');
            othersDiv.classList.remove('hideMe');

        }, 500);
    }

    return (
        <div>
            <h2>Shop here</h2>
            <div className="catagory my-3">
                <button onClick={showUrban}>Urban</button>
                <button onClick={showStreet}>Street</button>
                <button onClick={showWild}>Wild Life</button>
                <button onClick={showCitylife}>City Life </button>
                <button onClick={otherslife}>Others </button>
            </div>
            <p className="spinners hideMe"><Spinner animation="border" variant="primary" /></p>

            {/* -------------- This div will show only 'All' catagory ------------ */}
            <div className="product-show-div all-product">
                {
                    product.map(index => <ShopProuduct
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>
            {/* -------------- This div will show only 'Urban' catagory ------------ */}
            <div className="product-show-div urban-product hideMe">
                {
                    product.map(index => index.catagory == 'urban' && <ShopProuduct
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>

            {/* -------------- This div will show only 'Street' catagory ------------ */}
            <div className="product-show-div street-product hideMe">
                {
                    product.map(index => index.catagory == 'street' && <ShopProuduct
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>
            
            {/* -------------- This div will show only 'Wild' catagory ------------ */}
            <div className="product-show-div wild-product hideMe">
                {
                    product.map(index => index.catagory == 'wild' && <ShopProuduct
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>

            {/* -------------- This div will show only 'Citylife' catagory ------------ */}
            <div className="product-show-div citylife-product hideMe">
                {
                    product.map(index => index.catagory == 'citylife' && <ShopProuduct
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>

            {/* -------------- This div will show only 'Others' catagory ------------ */}
            <div className="product-show-div others-product hideMe">
                {
                    product.map(index => index.catagory == 'others' && <ShopProuduct
                        index={index}
                        key={index.img}
                        addProduct={props.addProduct}
                    ></ShopProuduct>)
                }
            </div>

        </div>
    );
};

export default Shop;