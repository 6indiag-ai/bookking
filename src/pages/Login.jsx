
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login(){
  const [mobile,setMobile]=useState(''); const [name,setName]=useState('');
  const nav = useNavigate();
  function submit(e){ e.preventDefault(); if(!mobile){ alert('Enter mobile'); return; } fetch('http://localhost:4000/api/login',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({mobile,name})}).then(r=>r.json()).then(res=>{ localStorage.setItem('ub_user_mobile', res.user.mobile); alert('Logged in (mock)'); nav('/'); }); }
  return (<div className='card'><div className='card-body'><h4>Login / Mock OTP</h4><form onSubmit={submit}><div className='mb-3'><label>Mobile</label><input className='form-control' value={mobile} onChange={e=>setMobile(e.target.value)} /></div><div className='mb-3'><label>Name</label><input className='form-control' value={name} onChange={e=>setName(e.target.value)} /></div><button className='btn btn-primary' type='submit'>Login</button></form></div></div>); }
