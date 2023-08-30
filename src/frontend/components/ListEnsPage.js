import React from 'react'
import product1 from './Public/product-5.jpg'
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Alchemy, Network } from 'alchemy-sdk';
import Loading from './Loading';

const ALCHEMY_API_KEY = process.env.REACT_APP_ALCHMEY_API_KEY


const ListEnsPage = ({ EnsNameAddress, marketplace, ENSContract, account }) => {
  const [ensNames, setEnsNames] = useState([]);
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadPage, setLoadPage] = useState(false);

  useEffect(() => {
    if (account != null) {
      getAllENS();
    }
  }, [account]);

  const getAllENS = async () => {
    setLoadPage(true);
    const config = {
      apiKey: `${ALCHEMY_API_KEY}`,
      network: Network.ETH_GOERLI,
    };

    const alchemy = new Alchemy(config);

    const ensContractAddress = '0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85';
    const ens = await alchemy.nft.getNftsForOwner(account, {
      contractAddresses: [ensContractAddress],
    });


    setEnsNames(ens.ownedNfts);
    setLoadPage(false);
  };


  const listForSale = async (tokId, ensName) => {
    setLoading(true);
    try {
      const tx = await ENSContract.setApprovalForAll(
        EnsNameAddress.address,
        true
      );
      await tx.wait();
      let priceInEth = ethers.utils.parseEther(price.toString());
      const tx2 = await marketplace.listENS(ensName, tokId, priceInEth);
      await tx2.wait();
      alert('Awesome! You have now Listed your Item for Sale!');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };







  return (
    <>
      <div className="bg-rbgradient flex flex-col justify-center items-center">
        <h1 className='text-white text-lg md:text-xl lg:text-3xl font-righteous tracking-wider uppercase pt-24 lg:px-32 pb-5'>Your Owned ENS</h1>

        {loading ? (
          <Loading value="Loading...." />
        ) : (
          <div>
            {ensNames.length === 0 ? (
              <div className='h-screen'>
                <h2 className='text-white font-righteous text-xl ml-2'>Sorry you do not own any ENS Domains</h2>
              </div>
            ) : loading ? (
              <Loading value='Please wait the Transcation is processing...' />
            ) : (
              <div className='grid xl:grid-cols-4 xl:gap-x-15 xl:px-20 xl:gap-y-14 xl:pb-32 gap-y-6 lg:grid-cols-3 md:grid-cols-2 md:gap-x-4 pb-20 '>
                {ensNames.map((na, i) => (
                  <div className='lg:h-max lg:w-72  bg-black rounded-xl text-white p-6 flex flex-col space-y-3 tracking-wide text-lg h-max w-max  ' key={i}>
                    <div className='overflow-hidden rounded-xl cursor-pointer  '>
                      <img src={product1} alt="" className=' hover:scale-110 hover:z-0 transition duration-500 ease-in-out h-60' />
                    </div>
                    <h1 className='font-roboto'>
                      Name : <span>{na.title}</span>
                    </h1>
                    <div>
                      <h1 className='font-roboto'>Price : &nbsp;
                        {/* Price Input field  */}
                        <input
                          type="text"
                          className='w-40 rounded-lg p-1 bg-slate-700 font-mono tracking-wider items-end' name='price'
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </h1>
                    </div>
                    <button
                      className='bg-blue-500 p-2 rounded-md hover:scale-105 transition duration-300 tracking-wide font-roboto '
                      onClick={() => listForSale(na.tokenId.toString(), na.title)}
                    >
                      List
                    </button>
                  </div>
                ))
                }
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default ListEnsPage