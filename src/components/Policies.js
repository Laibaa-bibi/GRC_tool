import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProgressBar from './ProgressBar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PolicyDetails from './PolicyDetails';
import { Link } from 'react-router-dom';


const PoliciesPage = () => {

  const handleClick = () => {
    <PolicyDetails/>
  };

  return (
    <div className='policy-page'>
      

<div class="top">

<div style={{ display: 'flex'}}>
      <SearchIcon style={{ fontSize: 26}} />
      <input type="text" placeholder="Quick Search" style={{height: '1.3rem', border: '1px solid #ddd', borderRadius: '10px'}} />
    </div>


    <div>
      <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', margin: 0 }}>
      <AccountCircleIcon />
        <span>user@domain.in</span>
      </h3>
    </div>

    </div>


<div className='Policy-result'>
<ThumbUpIcon style={{ color: 'gray' , marginRight: '8px' }}/>
<h6 style={{ fontStyle: 'italic', fontSize: 'small', fontWeight: 'normal'}}>Policy with higher progress rate : <span style={{ color: 'gray', fontWeight: 'bold' }}>Business Continuity</span></h6>
</div>
    

    <div className='Policies-1'>

      <div className='policy-item'>
        <h3>Access</h3>
        <h5>This policy works to provide <br></br>limitations and permissions</h5>
        <ProgressBar progress={50} />

        <Link to="/policy-details">
        <button onClick={handleClick}>View details</button>
        </Link>

      </div>

      <div className='policy-item'>
      <h3>Business Continuity</h3>
        <h5>This policy works to provide <br></br>limitations and permissions</h5>
        <ProgressBar progress={80} />
        <button>View details</button>
      </div>
    </div>


    <div className='Policies-1'>

      <div className='policy-item'>
        <h3>Domain and DNS</h3>
        <h5>This policy works to provide <br></br>limitations and permissions</h5>
        <ProgressBar progress={25} />
        <button>View details</button>
      </div>

      <div className='policy-item'>
      <h3>Email</h3>
        <h5>This policy works to provide <br></br>limitations and permissions</h5>
        <ProgressBar progress={60} />
        <button>View details</button>
      </div>
    </div>


        
    </div>
  );
}

export default PoliciesPage;
