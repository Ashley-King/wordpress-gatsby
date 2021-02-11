import React from 'react'
import {graphql} from 'gatsby'

const Page = props =>{
    //return page from props.data
   const {
       data:{
           wpgraphql: {page},
    },
   } = props
   //return title and content from page
   const{title, content} = page

    return (
        <div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
    )



}

export default Page

export const pageQuery = graphql`
    query GET_PAGE($id: ID!){
        wpgraphql{
            page(id: $id){
                title
                content
                uri
                slug
            }
        }
    }
`