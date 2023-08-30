import React from 'react'
import nft from "./Public/h.png";
import TimeLine from './TimeLine';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <div className='bg-rbgradient min-h-screen py-12'>
                <div className="flex flex-col md:flex-row md:px-16 container text-gray-200 mx-auto items-center justify-center ">
                    <div className="w-full px-4 md:w-3/6 flex order-2 md:order-1 flex-col items-start justify-start">
                        <p className="text-xl font-semibold capitalize ml-1 py-4 text-rose-600">ENS MARKETPLACE</p>
                        <h1 className="text-4xl md:text-6xl font-extrabold">Buy, sell, and own domains</h1>
                        <p className="text-md text-gray-400 mt-4">Decentralizing the Domain Name System: The Future of Secure and User-Friendly Blockchain Naming System for the Ethereum Ecosystem</p>
                        <div className="flex flex-row items-center justify-start mt-8">
                            <button className="bg-red-600 rounded-full text-white px-8 hover:bg-red-700 py-2 font-semibold">
                                <Link to='/buyens'>Buy Now</Link>
                            </button>
                            </div>
                    </div>
                    <div className="w-full md:w-3/6 mt-24 px-16 md:px-8 md:mt-12 order-1 md:order-1 flex flex-col items-start justify-start">
                        <img src={nft} />
                    </div>
                </div>
            </div>
                <TimeLine/>
        </>
    )

}