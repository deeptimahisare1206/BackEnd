import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function UseAxios() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/data')
            .then((res) => {
                // console.log(res.data.articles)
                setData(res.data);
            });
    }

    )
    const news = data.map((value, index) => {
        return (
           
                <div key ={index} className="card" style={{ width: '20rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">{value.name}</h5>
                        <p className="card-text">{value.email}</p>
                        <a href={value.phone} className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        
        )
        
    })

    return (
        <div className='box'>
            {news}
        </div>
    )
}
