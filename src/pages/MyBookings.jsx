
import React, {useEffect, useState} from 'react';
export default function MyBookings(){
  const [mobile,setMobile]=useState(''); const [list,setList]=useState([]);
  useEffect(()=>{ const m = localStorage.getItem('ub_user_mobile')||''; setMobile(m); if(m) fetch('http://localhost:4000/api/bookings?mobile='+m).then(r=>r.json()).then(setList); },[]);
  if(!mobile) return <div className='alert alert-info'>Please <a href='/login'>login</a></div>;
  return (<div><h3>My Bookings</h3>{list.length===0 && <div className='alert alert-secondary'>No bookings</div>}<div className='list-group'>{list.map(b=>(<div key={b.id} className='list-group-item d-flex justify-content-between align-items-center'><div><strong>{b.providerName}</strong><div className='small'>{b.date} {b.time}</div></div></div>))}</div></div>); }
