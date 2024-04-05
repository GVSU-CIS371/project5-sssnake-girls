import { defineStore } from "pinia"
import { ProductDoc  } from "./types/product";
import { initProducts } from "./data-init";

export const useItemStore = defineStore("ItemStore", {
    state: () => ({
        count: 0,
        products: null as ProductDoc[] | null,
    }),
    actions: {
        increment(){
            this.count++
        },
        init(){
            this.products = initProducts;
            console.log(this.products.length);
        },
        filterByCategory(cat: string){
            this.products = initProducts.filter((prod) => prod.data.category == cat)
        },  
        filterByRating(minRating: number){
            this.products = initProducts.filter((prod) => prod.data.rating >= minRating)
        },
        async fetchData() {
            await new Promise(resolve => setTimeout(resolve, 1000));
        },
    }
})