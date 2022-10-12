import React, { useEffect } from 'react'
import { useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'


export default function News(props) {
    const [article, setArticles] = useState([])
    const [loading, setLoding] = useState(false)
    



    useEffect(() => {
        const fetchApi = async () => {
            setLoding(true)
            props.setProgress(20)
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a11c834eec5f46f985ec66a072265c0c&pageSize=100`
            const response = await fetch(url)
            const resJson = await response.json()
            setArticles(resJson.articles)
            setLoding(false)
        }
        fetchApi()
        props.setProgress(100)
    }, [props]);

    return (
        <>
            <div className="container text-center" style={{ margintop: "10px" }}>
                <h1> News Hub : Top <span className='badge text-bg-secondary'> {(props.category).toUpperCase()}</span> Headlines  </h1>

                {loading && <Spinner />}

                <div className="row ">
                    {!article ? <><h1 style={{ margin: "20px" }}>
                        Site is busy</h1>
                    </>
                        : !loading && article.map((element, i) => {
                            return (
                                <div className="col-md-4 d-flex justify-content-center my-4" key={i}>

                                    <Newsitem title={element.title} dsc={element.description} imgurl={element.urlToImage} url={element.url} name={element.name} source={element.source.name} date={new Date((element.publishedAt)).toGMTString()} />

                                </div>
                            )

                        })}

                </div>



            </div>
        </>
    )
}

