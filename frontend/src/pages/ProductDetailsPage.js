import { useParams } from 'react-router-dom';

const ProductDeteailsPage = () => {
    const {id} = useParams()
    console.log(id);
    return <p>This is a Product Deteails Page.</p>
}

export default ProductDeteailsPage;