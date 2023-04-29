import React from 'react'
import './CrypoDetails.css';
import {useNavigate, useLocation} from 'react-router-dom';


export default function CrypoDetails() {
  const {state} = useLocation();
  const navigate = useNavigate(); 

  
  return (
    <div className='container'>

      <h5>Coin Details</h5>

      <section className="container pt-3 mb-3 text-dark">
    <div className="row pt-5 mt-30">

        <div className="col-lg-4 col-sm-6 mb-30 pb-5">
        <a class="card">
                <div className="box-shadow bg-white rounded-circle mx-auto text-center" style={{width: "90px", height: "90px", marginTop: "-45px"}}>
                    <img src={state.image} style={{width:"100px"}}/>

                </div>
                <div className="card-body text-center">
                    <h3 className="card-title pt-1">{state?.name}</h3>
                    <p className="card-text text-sm">current Price: {state?.current_price}</p>
                    <p className="card-text text-sm">Market Cap: ${state?.market_cap}</p>
                    <p className="card-text text-sm">Total Volume:$ {state?.total_volume}</p>
                    <p className="card-text text-sm">24hr High:$ {state?.high_24h}</p>
                    <p className="card-text text-sm">24hr Low:$ {state?.low_24h}</p>
                    <button className='btn btn-primary' onClick={()=>navigate('/')}>back</button>
                </div>
               </a> 
        </div>

    </div>
</section>

    </div>
  )
}




