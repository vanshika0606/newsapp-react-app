import React, { useEffect ,useState } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import '../App.css'


const News =(props)=> {
     const [articles ,setArticles] = useState([]);
     const [loading ,setLoading] = useState(true);
     const [page ,setPage] = useState(1);
     const [totalResults ,setTotalResults] = useState(0);


   const updateNews= async() =>{
      props.setProgress(10);
      const url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=3002ef4060524f48b65e3283fb9f5215&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      props.setProgress(30);
      let parsedata= await data.json();
      props.setProgress(70);
      setArticles(parsedata.articles);
      setTotalResults(parsedata.totalResults);
      setLoading(false);
     
      props.setProgress(100);
    }

    useEffect(()=>{
      document.title= `${props.category} - Newslion`;
      updateNews();
    },[]);

   


  //  const handlePrevclick= async ()=>{
      
  //     setpage(page - 1);
  //    updateNews();
  //   }
  //  const handleNextclick= async ()=>{
      
  //    setpage(page + 1);
  //     updateNews();
  //   }
   const fetchMoreData = async () => {
     
     
      const url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=3002ef4060524f48b65e3283fb9f5215&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page + 1);
      let data = await fetch(url);
      let parsedata= await data.json();
      
           setArticles(articles.concat(parsedata.articles))
              setTotalResults( parsedata.totalResults )
            //  setloading()
              
   

    };


    return (
      <div className='container my-3'>
        
          <h2   className='text-center' style={{margin:'100px 0px 40px 0px'}}>Newslion - Top headlines from {props.category}</h2>
           <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          {loading && <Spinner/>}
          <div className='container'>
        <div className='row '>

        { articles.map((element)=>{
             return <div className='col-md-4' key={element.url}>
             <Newsitem   title={element.title? element.title.slice(0,45):""}  description={element.description? element.description.slice(0,88):""} imageurl={!element.urlToImage?"data:image/jpeg;base64,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":element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
             </div>

            })}
          </div>
          </div>
          </InfiniteScroll>
          

      </div>
    )
          
          }

News.defaultProps ={
  country:'in',
  pageSize:8,
  category:'general',

}

News.propTypes={
  country:PropTypes.string ,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News;
