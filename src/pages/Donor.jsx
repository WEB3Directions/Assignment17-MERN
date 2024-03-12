


// src/App.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const Donor = () => {
  const [userType, setUserType] = useState('donor');
  const [bloodGroup, setBloodGroup] = useState('');
  const [donationStatus, setDonationStatus] = useState(false);

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setDonationStatus(false);
  };

  const handleDonate = () => {
    setDonationStatus(true);
  };

 

  const navigate = useNavigate();

  const getLogOut = () => {
    navigate("/");
   
  }

  const handleRecipientSubmit= () => {}

  return (
    <div className="container mx-auto p-4 bg-bg_color h-[100dvh] grid place-items-center px-3" >
      <h1 className="text-2xl font-bold mb-4">Blood Donation App</h1>
      <label className="block mb-2">
        User Type:{' '}
        <select
          className="border p-2"
          value={userType}
          onChange={(e) => handleUserTypeChange(e.target.value)}
        >
          <option value="donor">Donor</option>
          <option value="recipient">Recipient</option>
        </select>
      </label>

      {userType === 'donor' ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">Donor Form</h2>
          <label className="block mb-2">
            Blood Group Type:{' '}
            <select
              className="border p-2"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            >
               <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </label>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleDonate}
          >
            Donate
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-2">Recipient Form</h2>
          <label className="block mb-2">
            Blood Group Type:{' '}
            <select
              className="border p-2"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            >
               <option value="">Select Required Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </label>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleRecipientSubmit}
          >
            Submit
          </button>
        </div>
      )}

      {donationStatus && <p className="mt-4 text-green-600">Thank you for your donation!</p>}

      <img src="https://media.istockphoto.com/id/1291577428/vector/blood-group-compatibility-chart-with-universal-donor-0-and-universal-recipient-ab-concerning.jpg?s=612x612&w=0&k=20&c=LuiLsoXn_JOPaqK-WWLN0pOLQkLTtm-2sVJ36B2yTZ0="/>

<br/>

      <button onClick={()=>getLogOut()} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Log Out</button>
    </div>


  );
};

export default Donor;
