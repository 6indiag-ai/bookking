
import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
export default function Provider(){
  const { id } = useParams();
  const [provider,setProvider]=useState(null);
  const navigate = useNavigate();
  useEffect(()=>{ fetch('http://localhost:4000/api/provider/'+id).then(r=>r.json()).then(setProvider); },[id]);
  if(!provider) return <div>Loading...</div>;
  return (
    <div className='card'>
      <div className='card-body'>
        <h4>{provider.name}</h4>
        <p><strong>About:</strong> {provider.about}</p>
        <p><strong>Price:</strong> ₹{provider.price}</p>
        <p><strong>Phone:</strong> {provider.phone}</p>
        <div className='mt-3'><button className='btn btn-primary' onClick={()=>navigate('/book/'+provider.id)}>Book Now</button></div>
      </div>
    </div>
  );
}
