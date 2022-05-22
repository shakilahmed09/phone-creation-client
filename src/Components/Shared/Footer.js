import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='bg-black py-14'>
            <h2 className='text-white text-center text-xl sm:text-2xl md:text-4xl font-serif font-bold mb-7'>Phone Creation</h2>

            <div className='ml-3 mb-5'>
                <div>
                    <h4 className='text-white font-bold text-[14px] mb-5 uppercase'>The Phone Creation</h4>
                    <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>About Brand</Link>
                    <br />
                    <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>News & articles</Link>
                    <br />
                    <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>About Brand</Link>
                    <br />
                    <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>About Brand</Link>
                    <br />
                    <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-5'>About Brand</Link>
                    <br />
                </div>
                <div>
                    <h4 className='text-white font-bold text-[14px] mb-5 uppercase'>Explore Phone Creation</h4>
                    <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>About Brand</Link>
                    <br />
                    <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>About Brand</Link>
                    <br />
                    <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>About Brand</Link>
                    <br />
                    <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>About Brand</Link>
                    <br />
                    <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-5'>About Brand</Link>
                    <br />
                </div>
                <div>
                    <h4 className='text-white font-bold text-[14px] mb-5 uppercase'>Customer Service</h4>
                    <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>Payments</Link>
                    <br />
                    <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>Shipping</Link>
                    <br />
                    <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>Online Order Tracking</Link>
                    <br />
                    <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>Refunds & Returns</Link>
                    <br />
                    <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-2'>FAQ</Link>
                    <br />
                    <Link to={"/"} className='text-gray-400 hover:text-gray-200 inline-block mb-5'>Contact</Link>
                    <br />
                </div>
                <div>
                    <h4 className='text-white font-bold text-[14px] mb-5 uppercase'>Newsletter</h4>
                    <p className='text-gray-400 max-w-[250px] mb-3'>Subscribe now to receive monthly news & personalised offers!</p>
                    <button className='btn btn-sm rounded-full bg-white text-black text-xs hover:bg-gray-400'>Subscribe Now</button>
                </div>
            </div>
            <div style={{ borderBottom: "1px solid gray" }} class=" mx-auto"></div>
            <div className=' text-gray-400'>
                <div>
                    <p>Copyright © {currentYear} - All right reserved</p>
                </div>
                <div>
                    {/* <BeakerIcon/> */}
                    <h3> Lets go for a  </h3>
                </div>

            </div>
        </div>
    );
};

export default Footer;