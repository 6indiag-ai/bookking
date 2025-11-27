
import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
export default function Book(){
  const { id } = useParams();
  const [provider,setProvider]=useState(null);
  const [name,setName]=useState(''); const [mobile,setMobile]=useState(''); const [date,setDate]=useState(''); const [time,setTime]=useState('');
  const navigate = useNavigate();
  useEffect(()=>{ fetch('http://localhost:4000/api/provider/'+id).then(r=>r.json()).then(setProvider); },[id]);
  function submit(e){ e.preventDefault(); if(!name||!mobile){ alert('Name/mobile required'); return; } fetch('http://localhost:4000/api/bookings',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({providerId:id,providerName:provider.name,customerName:name,customerMobile:mobile,date,time,note:''})}).then(r=>r.json()).then(b=>{ alert('Booked ID: '+b.id); navigate('/my-bookings'); }); }
  if(!provider) return <div>Loading...</div>;
  return (
    <div className='card'><div className='card-body'><h4>Book: {provider.name}</h4>
      <form onSubmit={submit}>
        <div className='mb-3'><label className='form-label'>Name</label><input className='form-control' value={name} onChange={e=>setName(e.target.value)} /></div>
        <div className='mb-3'><label className='form-label'>Mobile</label><input className='form-control' value={mobile} onChange={e=>setMobile(e.target.value)} /></div>
        <div className='row'><div className='col-md-6 mb-3'><label className='form-label'>Date</label><input className='form-control' type='date' value={date} onChange={e=>setDate(e.target.value)} /></div>
        <div className='col-md-6 mb-3'><label className='form-label'>Time</label><input className='form-control' type='time' value={time} onChange={e=>setTime(e.target.value)} /></div></div>
        <div className='d-flex gap-2'><button className='btn btn-primary' type='submit'>Confirm Booking</button><button className='btn btn-outline-secondary' type='button' onClick={()=>navigate(-1)}>Cancel</button></div>
      </form></div></div>
  );
}
