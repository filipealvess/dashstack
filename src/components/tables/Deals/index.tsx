import Image from "next/image";
import products from "@/components/tables/Deals/mock";
import * as Styles from "@/components/tables/Deals/styles";
import { capitalizeFirstLetter } from "@/utils/wording";

function ProductsTable() {
    return (
        <Styles.Container>
            <Styles.Content>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Location</th>
                        <th>Date - Time</th>
                        <th>Piece</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td className="flex">
                                <Image
                                    alt={product.name}
                                    src={product.src}
                                    width={24}
                                />
                                {product.name}
                            </td>
                            <td>{product.location}</td>
                            <td>{product.date}</td>
                            <td>{product.piece}</td>
                            <td>{product.amount}</td>
                            <td>
                                <span className={`status ${product.status}`}>
                                    {capitalizeFirstLetter(product.status)}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Styles.Content>
        </Styles.Container>
    );
}

export default ProductsTable;
