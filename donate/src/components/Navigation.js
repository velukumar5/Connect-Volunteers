import { ethers } from 'ethers';
import logo from '../assets/logo.svg';

const Navigation = ({ account, setAccount }) => {
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account);
  }

  return (
    <nav>
      <div className='nav__brand'>
        <img src={logo} alt="Logo" />
        <link rel="icon" href="img/logo.png"></link>
        <h1>Connect Volunteer's to Donate</h1>

        <ul className='nav__links'>
          <li><a href="#/">Home</a></li>
          <li><a href="https://connectvolunteer.netlify.app/">Donate</a></li>
          <li><a href="https://connectvolunteer.netlify.app/">Complaint</a></li>
          <li><a href="https://connectvolunteer.netlify.app/">Volunteer</a></li>
        </ul>
        
      </div>

      {account ? (
        <button
          type="button"
          className='nav__connect'
        >
          {account}
        </button>
      ) : (
        <button
          type="button"
          className='nav__connect'
          onClick={connectHandler}
        >
          Connect to Wallet
        </button>
      )}
    </nav>
  );
}

export default Navigation;