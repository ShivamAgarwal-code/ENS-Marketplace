import React from 'react'
import { useState, useEffect } from 'react';
import product1 from './Public/product-5.jpg'
import Loading from './Loading';



export const BuyensPage = ({ marketplace, loadContracts }) => {
  const [allListings, setAllListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buyLoading, setBuyLoading] = useState(false);

  useEffect(() => {
    if (marketplace !== '') {
      allListing();
    }
  }, [marketplace]);


  useEffect(() => {
    loadContracts();
  }, [])

  const allListing = async () => {
    setLoading(true);
    try {
      const itemCount = await marketplace.itemCount();
      let items = [];
      for (let i = 1; i <= itemCount; i++) {
        const item = await marketplace.items(i);

        if (item.listed) {
          const itemId = item.itemId.toString();
          const price = item.price.toString();
          //add all these to an array and save in state
          items.push({
            price: price,
            name: item.name,
            itemId: itemId,
            seller: item.seller,
            itemNo: i,
          });
        }
      }
      setLoading(false);
      const filteredItems = [];
      items.forEach((item) => {
        let index = filteredItems.findIndex(t => t.name === item.name);
        if (index === -1) {
          filteredItems.push(item);
        } else {
          filteredItems[index] = item;
        }
      });

      setAllListings(filteredItems);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const buyListing = async (item) => {
    setBuyLoading(true)
    try {
      const tx = await marketplace.buyENS(item.itemId, {
        value: item.price,
      });
      await tx.wait();
      alert('Congrats! You have bought the ENS', item.name);
      setBuyLoading(false);
      allListing();
    } catch (error) {
      setBuyLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-rbgradient flex flex-col justify-center items-center">
        <h1 className='text-white text-lg md:text-xl lg:text-3xl font-righteous tracking-wider uppercase pt-24 lg:px-32 pb-5'>Available ENS</h1>
        {loading ? (
          <Loading value="Loading...." />
        ) : allListings.length === 0 ? (
          <div className='h-screen'>
            <h1 className='text-white font-righteous text-xl'>There are currently no ENS for Sale</h1>
          </div>
        ) : (
          <div>
            <div className='grid xl:grid-cols-4 xl:gap-x-15 xl:px-20 xl:gap-y-14 xl:pb-32 gap-y-6 lg:grid-cols-3 md:grid-cols-2 md:gap-x-4 pb-20  '>

              {allListings.map((item, i) => (
                <div className='lg:h-max lg:w-72  bg-black rounded-xl text-white p-6 flex flex-col space-y-3 tracking-wide text-lg h-max w-max   ' key={i}>
                  <div className='overflow-hidden rounded-xl cursor-pointer  '>
                    <img src={product1} alt="" className=' hover:scale-110 hover:z-0 transition duration-500 ease-in-out h-60' />
                  </div>
                  <h1 className='font-roboto'>Name : <span>{item.name}</span></h1>
                  <h1 className='font-roboto'>Price : <span>{item.price / 10 ** 18} ETH</span></h1>
                  <button className='bg-blue-500 p-2 rounded-md hover:scale-105 transition duration-300 tracking-wide font-roboto ' onClick={() => buyListing(item)}>
                    {buyLoading ? (
                      <span>Processing..</span>
                    ) : (
                      <span>Buy This ENS</span>
                    )}
                  </button>
                </div>
              ))}
            </div>

          </div>

        )
        }

      </div>
    </>
  )
}
