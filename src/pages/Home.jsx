
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home(){
  const [cats,setCats]=useState([]);
  const [providers,setProviders]=useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    fetch('http://localhost:4000/api/categories').then(r=>r.json()).then(setCats);
    fetch('http://localhost:4000/api/providers').then(r=>r.json()).then(setProviders);
  },[]);

  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <input className="form-control form-control-lg me-3" placeholder="Search services..." />
        <button className="btn btn-outline-secondary">Nearby</button>
      </div>
      <h4>Categories</h4>
      <div className="row g-3 mb-4">
        {cats.map(c=>(
          <div className="col-6 col-md-3" key={c.id}>
            <div className="card p-3 text-center">
              <div style={{fontSize:28}}>{c.icon}</div>
              <div className="mt-2">{c.name}</div>
              <div className="mt-2"><button className="btn btn-sm btn-primary" onClick={()=>navigate('/category/'+c.id)}>View</button></div>
            </div>
          </div>
        ))}
      </div>
      <h4>Top Services</h4>
      <div className="row g-3">
        {providers.map(p=>(
          <div className="col-md-4" key={p.id}>
            <div className="card h-100 p-3">
              <h5>{p.name}</h5>
              <div className="small">{p.category} · ₹{p.price} · Rating {p.rating}</div>
              <div className="mt-2"><button className="btn btn-primary" onClick={()=>navigate('/provider/'+p.id)}>Details</button></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
