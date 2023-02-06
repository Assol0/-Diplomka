import React, { useContext, useEffect } from 'react'
import CategoryTitle from '../../components/CategoryTitle'
import { CustomContext } from '../../utils/Context'
import CatalogRow from './CatalogRow/CatalogRow'
import SideBar from './SideBar/SideBar'

const Catalog = () => {
    const {category, getProducts} = useContext(CustomContext)

    useEffect(()=>{
        getProducts()
    }, [category])
  return (
    <selection>
        <div className="container">
            <CategoryTitle/>
            <p className='catalog-line'>

            </p>
            <div className="catalog__content">
                <div className="catalog__left">
                    <SideBar/>
                </div>
                <div className="catalog__right">
                    <CatalogRow/>
                </div>
            </div>
        </div>
    </selection>
  )
}

export default Catalog