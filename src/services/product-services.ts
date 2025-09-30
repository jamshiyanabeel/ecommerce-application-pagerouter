import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase{
    static getProducts = async () => {

        try {
        const res = await fetch(this.getUrl('/products'));
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return await res.json();
        } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
    }

    //     var productsRes = await fetch(this.getUrl('/products'));
    //     var products = await productsRes.json();
    //     return products;
    // }

    // static getProductById = async (id:number) => {
    //     var productRes = await fetch(this.getUrl('/products/' + id));
    //     var product = await productRes.json();
    //     return product;
    // }
    static getProductById = async (id: number) => {
    try {
        const productRes = await fetch(this.getUrl('/products/' + id));

        if (!productRes.ok) {
            throw new Error(`HTTP error! Status: ${productRes.status}`);
        }

        const product = await productRes.json();
        return product;
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        return null; // or throw error if you want to handle it higher up
    }
}

}