
import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
export default function Category(){
  const { slug } = useParams();
  const [providers,setProviders]=useState([]);
  const navigate = useNavigate();
  useEffect(()=>{ fetch('http://localhost:4000/api/providers?category='+slug).then(r=>r.json()).then(setProviders); },[slug]);
  return (
    <div>
      <h3 className='text-capitalize'>{slug}</h3>
      <div className='list-group'>
        {providers.map(p=>(
          <div key={p.id} className='list-group-item d-flex justify-content-between align-items-center'>
            <div><strong>{p.name}</strong><div className='small'>Rating {p.rating} · ₹{p.price}</div></div>
            <div><button className='btn btn-sm btn-primary' onClick={()=>navigate('/book/'+p.id)}>Book</button></div>
          </div>
        ))}
      </div>
    </div>
  );
}
