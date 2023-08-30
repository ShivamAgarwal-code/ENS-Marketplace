import './App.css';
import { useState, useEffect } from 'react';
import { Navbar } from "./Navbar";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './Home';
import { BuyensPage } from './BuyensPage';
import ListEnsPage from './ListEnsPage';
import { About } from './About';
import { Footer } from './Footer';
import LoginPage from './LoginPage';
import useArcanaAuth from './useArcanaAuth';
import { ethers } from 'ethers';
import ensAbi from './EnsContract.json';
import EnsNameAbi from '../contractsData/EnsName.json';
import EnsNameAddress from '../contractsData/EnsName-address.json';
import { ColorRing } from 'react-loader-spinner';
import Loading from './Loading';




function App() {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [marketplace, setMarketplace] = useState('');
  const [ENSContract, setENSContract] = useState('');
  const [email, setEmail] = useState("");

  const ENSContractAddress = "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85";

  const {
    loggedIn,
    getAccounts,
    login,
    loginWithLink,
    logout,
    auth,
  } = useArcanaAuth();

  const handleLogout = async () => {
    await logout();
  };


  useEffect(() => {
    const loadDetails = async () => {
      
        if (loggedIn) {
          const acc = await getAccounts();
          setAccount(acc[0]);
          setLoading(false);
          // loadContracts();
        } else {
          setLoading(false);

        }
    };
    loadDetails();
  });

  




  const onClickButton = async() => {
    loadContracts();
    const acc = await getAccounts();
    setAccount(acc[0]);
  }


  const loadContracts = async () => {
    try {
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      await auth.init()
      const arcanaProvider = await auth.loginWithSocial('google')
      const provider = new ethers.providers.Web3Provider(arcanaProvider)
      const signer = provider.getSigner();
      const mp = new ethers.Contract(
        EnsNameAddress.address,
        EnsNameAbi.abi,
        signer
      );
      setMarketplace(mp);
      const ensCont = new ethers.Contract(ENSContractAddress, ensAbi.abi, signer);
      setENSContract(ensCont);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };


  return (
    <div>
      {loading ? (
        <div className='loading'>
          <ColorRing
            visible={true}
            height='100'
            width='80'
            ariaLabel='blocks-loading'
            wrapperStyle={{}}
            wrapperClass='blocks-wrapper'
            colors={['#000000']}
          />
        </div>
      ) : !loading && loggedIn ? (
        <div>
          <Navbar account={account} onClickButton={onClickButton} handleLogout={handleLogout}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/buyens' element={<BuyensPage marketplace={marketplace} loadContracts={loadContracts} />} />
            <Route path='/listens' element={<ListEnsPage EnsNameAddress={EnsNameAddress} marketplace={marketplace} ENSContract={ENSContract} account={account} />} />
            <Route path='/about' element={<About />} />
            <Route path='/loading' element={<Loading />} />
          </Routes>
          <Footer />
        </div>
      ) : (
        <LoginPage loginWithLink={loginWithLink} login={login} />
      )}
    </div>



  );
}

export default App;
