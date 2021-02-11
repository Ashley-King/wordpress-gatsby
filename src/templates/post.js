import React from 'react'
import {graphql} from 'gatsby'

const Post = props =>{
    //return page from props.data
   const {
       data:{
           wpgraphql: {post},
    },
   } = props
   //return title and content from page
   const{title, content} = post

    return (
        <div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
    )



}

export default Post

export const pageQuery = graphql`
    query GET_POST($id: ID!){
        wpgraphql{
            post(id: $id){
                title
                content
                uri
                slug
            }
        }
    }
`