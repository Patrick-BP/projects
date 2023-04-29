import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function HomePage() {

   const navigate = useNavigate(); 

const [coins, setCoins] = useState([]);
const [input, setInput] = useState("");


// async function fetchData(){
//     const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
//      setCoins(response.data)
// }

useEffect(()=>{
  setCoins(data)
 console.log("component start");
 return ()=>{
  console.log("component end");
 }
},[input])



const highLowCalcul = (high , low) => {
    const cal = ((high - low)/low)*100;
    return cal.toFixed(2);
}

const handleSearch = (event) => {
  setInput(event.target.value)
}

const filter = coins.filter(coin=> coin.name.toLowerCase().includes(input.toLowerCase())  || 
                                  coin.symbol.toLowerCase().includes(input.toLowerCase()));




  return (
    <div className="container ">
      <div>
        <h4>Welcome to CryptoChecker</h4>
      </div>
      <div>
        <input className="text-dark" type="search"  name="search" value={input} onChange={handleSearch} /> 
      </div>
      <div>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Img</th>
              <th scope="col">Name</th>
              <th scope="col">Symbol</th>
              <th scope="col">Current Price</th>
              <th scope="col">High & Low </th>
              <th scope="col">Market Cap</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {filter.length === 0 ? <tr> <td><p>Not found</p> </td></tr> : filter.map((coin)=>{
                return <tr key={coin.id}>
                            <td><img src={coin.image} alt="" className="imgstyle"/></td>
                            <td>{coin.name}</td>
                            <td>{coin.symbol}</td>
                            <td>$ {coin.current_price}</td>
                            <td className= {highLowCalcul(coin.high_24h, coin.low_24h) > 0 ? "text-success" : "text-danger"}>
                                {highLowCalcul(coin.high_24h, coin.low_24h)} %
                            </td>
                            <td>$ {coin.market_cap}</td>
                            <td><button onClick={()=>navigate('/coindetails',{state:coin})} className="btn btn-success">More Details</button></td>
                        </tr>
            })}
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
}



