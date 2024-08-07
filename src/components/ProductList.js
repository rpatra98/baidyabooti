// /components/ProductList.js
import ProductRow from './ProductRow';

export default function ProductList({ products }) {
    return (
        <table border="1" style={{ margin: '8ch' }}>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description Heading</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item) => (
                    <ProductRow key={item._id} product={item} />
                ))}
            </tbody>
        </table>
    );
}
