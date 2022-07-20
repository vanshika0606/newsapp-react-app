import React from 'react'


const Newsitem =(props)=> {
    
    
     let   {title, description, imageurl,newsurl ,author,date,source } =props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={imageurl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...<span className="badge bg-secondary">{source}</span></h5>
                            <p className="card-text">{description}....</p>
                            <p className="card-text">By {!author ?"unknown": author} on {date}</p>
                            <a href={newsurl } target="_blank" className="btn btn-success">Read more</a>
                        </div>
                </div>
            </div>
        )
    
}


export default Newsitem
