import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const PolicyDetails = () => {
  return (
    <div className='policy-details'>

<div class="top1">

<div style={{ display: 'flex' , textAlign:'center', alignItems:'center'}}>
      <h3 style={{textAlign:'center' , height: '1.3rem'}}>Access</h3>
    </div>


    <div>
      <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', margin: 0 }}>
      <AccountCircleIcon />
        <span>user@domain.in</span>
      </h3>
    </div>

</div>

<div className='content-details'>
<div className='details'>

    <div className='Title'>
        <h3 style={{color:'gray'}}>Title</h3>
        <p>Access</p>
    </div>

    <div className='Summary'>
    <h3 style={{color:'gray'}}>Summary</h3>
    <p style={{fontSize:14}}>Defines guidelines and procedures governing the granting, revocation, and management of user access rights to organizational resources and systems.</p>
    </div>

    <div className='Purpose'>
    <h3 style={{color:'gray'}}>Purpose</h3>
    <p style={{fontSize:14}}>Ensure secure and authorized access to organizational resources</p>
    </div>

    <div className='Scope'>
    <h3 style={{color:'gray'}}>Scope</h3>
    <p style={{fontSize:14}}>The scope of an access policy encompasses all aspects related to user access management, including user authentication, authorization, permissions, provisioning, deprovisioning, and access control measures across the organization's IT infrastructure and systems.</p>
    </div>

    <div className='Requirements'>
    <h3 style={{color:'gray'}}>Requirements</h3>
<p style={{fontSize:14}}>The requirements of an access policy outline the criteria and conditions that must be met for users to obtain and maintain access privileges, including adherence to authentication protocols, adherence to least privilege principles, periodic access reviews, and compliance with applicable regulations and policies</p>
    </div>

</div>

<div className='table-of-content'>

<p1>Table of Contents</p1>
<p style={{fontSize:14}}>Title</p>
<p style={{fontSize:14}}>Summary</p>
<p style={{fontSize:14}}>Purpose</p>
<p style={{fontSize:14}}>Scope</p>
<p style={{fontSize:14}}>Requirements</p>

<br></br>
<div className='Comment'>
  <p2 style={{color:'gray'}}>Add Comment</p2>
  <br />

  <input type="text" style={{ height: 50 }} />
  
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <input type="radio" style={{marginTop:12}}/>
    <p4 style={{ marginLeft: '5px' }}>Have you read policy details?</p4>
  </div>
  <br />
  <button className='submit-btn'>Submit</button>
</div>


</div>

</div>


    </div>
  );
}
export default PolicyDetails;
