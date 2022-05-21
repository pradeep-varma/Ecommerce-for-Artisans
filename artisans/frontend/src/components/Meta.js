import React from 'react'
import {Helmet} from 'react-helmet'

 const Meta = ({title,description,keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />

        </Helmet>
    )
}

Meta.defaultProps = {
    title:'Welcome to Vivokal',
    description:'Find The Local Products for the cheapest prices',
    keywords:'Explore The Products of Local Indian Entrepenuers',
}




export default Meta
