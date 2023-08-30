import React from 'react'
import about1 from './Public/about-1.svg'
import about2 from './Public/about-2.svg'
export const About = () => {
  return (
    <>

      <div className='bg-login min-h-screen py-12'>
        <h4 className="text-center font-bold text-2xl mt-12 text-gray-200">About Us</h4>                <div className="flex flex-col md:flex-row md:px-16 container text-gray-200 mx-auto items-center justify-center ">
          <div className="w-full px-4 md:w-3/6 flex order-2 md:order-1 flex-col items-start justify-start">
            <p className="text-md text-gray-300 mt-4 indent-8 text-justify leading-loose">Welcome to the About Us page of the Ethereum Name Server (ENS) marketplace!

              ENS is a decentralized, open-source system built on the Ethereum blockchain that provides users with human-readable names for their cryptocurrency wallets, websites, and other applications. The ENS marketplace is a platform that allows users to buy, sell, and auction ENS names.

              At the ENS marketplace, we believe that everyone should have access to a decentralized and censorship-resistant system for naming their digital assets. Our platform enables anyone to easily and securely register an ENS name, which can then be used to identify their Ethereum wallet, website, or smart contract.</p>

          </div>
          <div className="w-full md:w-3/6 mt-24 px-16 md:px-8 md:mt-12 order-1 md:order-1 flex flex-col items-start justify-start">
            <img src={about1} />
          </div>
        </div>



      </div>
      <div className='bg-slate-900 min-h-screen py-12 px-16 flex items-center justify-center'>
        <div className="w-full md:w-3/6 mt-24 px-16 md:px-8 md:mt-12  flex flex-col items-start justify-start">
          <img src={about2} />
        </div>
        <div className="w-full px-4 md:w-3/6 flex order-2 md:order-1 flex-col items-start justify-start">
          <p className="text-md text-gray-300 mt-4 indent-8 text-justify leading-loose">Our team consists of passionate developers and blockchain enthusiasts who are committed to building a reliable and user-friendly platform for the ENS community. We are dedicated to continuously improving our platform, implementing new features, and ensuring the highest level of security for our users.

            With the ENS marketplace, you can discover and acquire premium ENS names that suit your needs and preferences. Our platform provides a transparent and efficient marketplace for buying and selling ENS names, allowing users to browse listings, submit bids, and manage their auctions with ease.

            We are proud to be a part of the vibrant and growing Ethereum ecosystem, and we strive to contribute to its success by providing a reliable and secure platform for ENS users worldwide.</p>

        </div>

      </div>
    </>
  )
}
