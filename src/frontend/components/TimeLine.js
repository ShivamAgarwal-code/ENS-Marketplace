import React from 'react'
import { Link } from 'react-router-dom'

const TimeLine = () => {
    return (

        <div className="timeline flex py-12  bg-slate-900 text-light">
            <div className="flex flex-col md:flex-row container mt-5 px-8 md:px-16 mx-auto">

                <div className="w-full md:w-1/3 md:px-8 py-8"><h3 className='text-xl font-bold text-gray-200 '>5 Easy Steps to get your ENS</h3></div>
                <div className="w-full px-8 md:px-0 md:w-2/3">
                    <ol className="border-l-2 border-blue-600">
                        <li>
                            <div className="flex flex-start items-center">
                                <div className="bg-blue-600 w-8 h-8  flex items-center justify-center rounded-full -ml-4 mr-3 -mt-2">
                                    <div className='w-6 h-6  bg-slate-900 rounded-full flex items-center justify-center font-semibold text-gray-100'>
                                        <div className="text-xs text-gray-100">1</div>
                                    </div>
                                </div>
                                <h4 className="text-gray-200 font-semibold text-xl -mt-2">Login to our application</h4>
                            </div>
                            <div className="ml-6 mb-6 pb-6">
                               
                                <p className="text-gray-300 mt-2 mb-4">The first step while using our app is just login you can login
                                    with your social accounts like google and discord and also
                                    with your mail. The arcana provides the awesome auth sdk
                                    that can be used to login through multiple social accounts.</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-start items-center">
                                <div className="bg-blue-600 w-8 h-8  flex items-center justify-center rounded-full -ml-4 mr-3 -mt-2">
                                    <div className='w-6 h-6  bg-slate-900 rounded-full flex items-center justify-center font-semibold text-gray-100'>
                                        <div className="text-xs text-gray-100">2</div>
                                    </div>
                                </div>
                                <h4 className="text-gray-200 font-semibold text-xl -mt-2">Get Ens name</h4>
                            </div>
                            <div className="ml-6 mb-6 pb-6">
                               
                                <p className="text-gray-300 mt-2 mb-4">After login you will instantly get a account address and the
                                    private key and thw arcana wallet in bottom right corner
                                    from which you can perform transcations and can send and
                                    receive between various cryptocurrencies. So to get ens name
                                    visit the site <a href='https://app.ens.domains/' target='_blank' className='text-blue-700 underline'>here</a> this is site where you can register the
                                    domains on goerli network for that you have to simply import
                                    your account into some browser wallet like metamask..</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-start items-center">
                                <div className="bg-blue-600 w-8 h-8  flex items-center justify-center rounded-full -ml-4 mr-3 -mt-2">
                                    <div className='w-6 h-6  bg-slate-900 rounded-full flex items-center justify-center font-semibold text-gray-100'>
                                        <div className="text-xs text-gray-100">3</div>
                                    </div>
                                </div>
                                <h4 className="text-gray-200 font-semibold text-xl -mt-2">List the ens for sale
                                </h4>
                            </div>
                            <div className="ml-6 mb-6 pb-6">
                               
                                <p className="text-gray-300 mt-2 mb-4">After getting the ens name you can list it to sell on our
                                    application in the desired amount you want on the <Link to='/listens' className='underline text-blue-700'>ListEnsPage</Link></p>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-start items-center">
                                <div className="bg-blue-600 w-8 h-8  flex items-center justify-center rounded-full -ml-4 mr-3 -mt-2">
                                    <div className='w-6 h-6  bg-slate-900 rounded-full flex items-center justify-center font-semibold text-gray-100'>
                                        <div className="text-xs text-gray-100">4</div>
                                    </div>
                                </div>
                                <h4 className="text-gray-200 font-semibold text-xl -mt-2">Buy ens</h4>
                            </div>
                            <div className="ml-6 mb-6 pb-6">
                               
                                <p className="text-gray-300 mt-2 mb-4">If you are a buyer and want to get some ens name then you
                                    can got to the  <Link to='/buyens' className='underline text-blue-700'>BuyEnsPage</Link> and can buy the ens
                                    domain from the listed ones.</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-start items-center">
                                <div className="bg-blue-600 w-8 h-8  flex items-center justify-center rounded-full -ml-4 mr-3 -mt-2">
                                    <div className='w-6 h-6  bg-slate-900 rounded-full flex items-center justify-center font-semibold text-gray-100'>
                                        <div className="text-xs text-gray-100">5</div>
                                    </div>
                                </div>
                                <h4 className="text-gray-200 font-semibold text-xl -mt-2">Need</h4>
                            </div>
                            <div className="ml-6 mb-6 pb-6">
                               
                                <p className="text-gray-300 mt-2 mb-4">Anyone might be thinking is they can buy the ens names on
                                    the site like opensea so why should anyone come to our
                                    application the main reason behind creating this app is for
                                    new people who just come to the web3 space and want to
                                    work in it because they don’t know most of the things and how to setup the wallets but our app has acrana
                                    authentication which maps our social account with our
                                    account address so it makes its simple to use</p>
                            </div>
                        </li>

                    </ol></div>
            </div>
        </div>


    )
}

export default TimeLine