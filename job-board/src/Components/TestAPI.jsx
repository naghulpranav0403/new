import React, { useEffect, useState } from 'react'

import axios from 'axios';

const TestAPI = () => {


    const [loading,setLoading]=useState(false);

useEffect(()=>{
    const fetchData = async ()=>{
    const options = {
      method: 'GET',
      url: 'https://job-search-api1.p.rapidapi.com/v1/job-description-search',
      params: {
        q: 'software engineer',
        page: '1',
        country: 'us',
        city: 'Seattle'
      },
      headers: {
        'x-rapidapi-key': '4ec6238f1emsh8011838fd0cf2cbp1cfd70jsn12609cdfcf93',
        'x-rapidapi-host': 'job-search-api1.p.rapidapi.com'
      }
    };
    try {
        setLoading(true);
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    } finally{
        setLoading(false)
    }
};
fetchData()
    
        
    },[])
    return (
      <div>
        {loading && (<>
            <h1>Loading</h1>
        </>)}
      </div>
    )
}


export default TestAPI
