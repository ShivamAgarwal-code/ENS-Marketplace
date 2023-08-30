import { CHAIN, AuthProvider } from "@arcana/auth";
import { useEffect, useState } from "react";

//Config
const appAdd = `${process.env.REACT_APP_ARCANA_APP_ID}`;

let auth = new AuthProvider(`${appAdd}`,
    { //required
        network: 'testnet', //defaults to 'testnet'
        position: 'right', //defaults to right
        theme: 'dark', //defaults to dark
        alwaysVisible: true, //defaults to true which is Full UI mode
        chainConfig: {
            chainId: CHAIN.ETHEREUM_GOERLI, //defaults to CHAIN.ETHEREUM_MAINNET
            rpcUrl: 'https://goerli.infura.io/v3/', //defaults to 'https://rpc.ankr.com/eth'
        },
    }
);

function useArcanaAuth() {
    const [loggedIn, setLoggedIn] = useState(false);


    //Social Login

    const login = async (socialType) => {
            await auth.loginWithSocial(socialType);
            setLoggedIn(true);
    };

    //Email Link/ Passwordless login
    const loginWithLink = async (email) => {
            await auth.loginWithLink(email);
            setLoggedIn(true);
    };

    //Getting user Accounts
    const getAccounts = async () => {
            return await auth.provider.request({ method: "eth_accounts" });
    };

    //Logout
    const logout = async () => {
        if (loggedIn) {
            await auth.logout();
            setLoggedIn(false);
        }
    };

    useEffect(() => {
        const checkLogin = async () => {
            await auth.init();
            if (await auth.isLoggedIn()) {
                setLoggedIn(true);
            }
        };
        checkLogin();
    }, []);

    return {
        loggedIn,
        login,
        loginWithLink,
        getAccounts,
        logout,
        auth,
    };
}

export default useArcanaAuth;