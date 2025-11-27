
import React, {useEffect, useState} from 'react';
export default function Categories(){
  const [cats,setCats]=useState([]);
  useEffect(()=>{ fetch('http://localhost:4000/api/categories').then(r=>r.json()).then(setCats); },[]);
  return (
    <div>
      <h3>All Categories</h3>
      <div className="row g-3">
        {cats.map(c=>(
          <div className="col-6 col-md-3" key={c.id}>
            <div className="card p-3 text-center"><div style={{fontSize:28}}>{c.icon}</div><div className="mt-2">{c.name}</div></div>
          </div>
        ))}
      </div>
    </div>
  );
}
