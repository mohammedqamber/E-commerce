import React, { Suspense } from 'react'
import SkeletonList from '../components/skeleton/SkeletonList'
const LazyList = React.lazy(() => import('./ProductList'))

function LazyProductList() {
    return (
        <Suspense fallback={<SkeletonList/>}>
            <LazyList/>
        </Suspense>
    )
}

export default LazyProductList
