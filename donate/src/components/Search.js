const Search = () => {
  return (
    <header>
      <p>
        <h3>How to Use *install metamask in playstore or download chrome extesnion <h5> -- Commends for Some Requirements</h5></h3>
        <h6> </h6>
        <h6></h6>
        <h6>  </h6>
      </p>
      <table>
        <tr>
          <th>Commends</th>
          <th>Details</th>
          
        </tr>
        <tr>
          <td>npx hardhat node</td>
          <td>~To install hardhat</td>
        </tr>
        <tr>
          <td>npm install --save-dev "hardhat@^2.13.1</td>
          <td>~version of hardhat</td>  
        </tr>
        <tr>
          <td>npx hardhat node</td>
          <td>~ use the private key for the ethers</td>  
        </tr>
      </table>
      <p className="header__subtitle">Donate available Amount</p>
      <h2 className="header__title">It all begins with a Humanity<br></br>
        “Make a donation to support us & people.”</h2>
      <div className="header__search">
        <input
          type="text"
          className="header__input"
          placeholder="Enter the amount of ETH"
        />
        <button
          type="button"
          className='header__button'
        >
          Donate Now
        </button>
      </div>


    </header>
  );
}

export default Search;