import React from 'react'
import './Admin.css';
import { useState } from 'react';
import Card from './Card';

export const Admin = () => {
  const [checked, setChecked] = useState(false);
  function handleChange(e) {
    setChecked(e.target.checked);
  }
  return (
    <>
      <div className='main'>
        <h1 className='subheading' style={{ color: '#6db549', fontWeight: '900' }}>Admin Dashboard</h1>

        <h2
          className="subheading"
          style={{ color: 'black', fontWeight: '500', fontSize: '20px', marginTop: '50px', marginBottom: '20px' }}
        >
          User documents
        </h2>
        <div className='table' style={{ margin: '10px' }}>
          <div className="" style={{ color: "black", fontWeight: '500' }}>

            <div class="flex-container table-head">
              <div className="row-elements" style={{ marginRight: '20px' }}>User. No.</div>
              <div className="row-elements" style={{ marginRight: '20px' }}>Document type</div>
              <div className="row-elements " style={{ marginRight: '20px' }}>Document Link</div>
              <div className="row-elements" style={{ marginRight: '20px' }}>Verification</div>
              <div className="row-elements" style={{ marginRight: '20px' }}>Verified by</div>
            </div>
          </div>
          <div className="card">

            {/* map user cards with data from backend  instead*/}

            <Card col1="1" col2="Identity card" col3="Document Link" col4="No" col5="id:6789" />
            <Card col1="2" col2="Identity card" col3="Document Link" col4="No" col5="id:6789" />
            <Card col1="3" col2="Identity card" col3="Document Link" col4="No" col5="id:6789" />

          </div>


        </div>


      </div>
    </>
  )
}
