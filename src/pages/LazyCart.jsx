import React, {Suspense} from 'react'
import SkeletonCart from '../components/skeleton/skeletonCart'

const LazyCartComp = React.lazy(() => import('./Cart'))

function LazyCart() {
    return (
        <Suspense fallback={<SkeletonCart/>}>
            <LazyCartComp/>
        </Suspense>
              
    )
}

export default LazyCart
