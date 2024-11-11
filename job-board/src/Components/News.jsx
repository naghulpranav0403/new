import React, { useEffect,useState } from 'react'
import axios from 'axios';
import test from './test.json'
import './News.css'
const News = () => {
    const [response, setResponse] = useState(test)

    // useEffect(() => {
    //     console.log("Sending Request");
    //     axios.get("https://newsapi.org/v2/everything?q=jobs&sortBy=publishedAt&apiKey=42abb4fafd904d13aa5564a1a4d177df")
    //         .then((response) => {
    //             console.log(response)
    //             setResponse(response)
    //         })

    //         .catch((error) => {
    //             console.error(error);
    //         })
    // }, [])
  return (
    <div>
        {
            response.data.articles.map((item,index)=>(
                <div key={index}>
                    <div className="gr" >

                    <h1>
                        {item.title}
                    </h1>
                    <img width="200px"src={item.urlToImage}/>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default News