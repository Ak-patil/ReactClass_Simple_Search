import React from 'react'
const NewsList = (props) =>{

    console.log("props data",props);

    const listnews=props.mynews.map((data)=>{
        return(
            <div>
                <h1>{data.title}</h1>
                <h5>{data.feed}</h5>
                </div>
        )

    })
    return(
        <div> 
            {listnews}
         </div>
    )

}
export default NewsList;