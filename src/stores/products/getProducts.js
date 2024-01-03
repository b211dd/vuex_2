export default {
    state: {
        products :"",
    },
    getters: {
        getFirstProduct(state){
            return state.products[0];
        }
    },
    mutations: {
        getProducts(state,products){
            state.products = products;
            console.log(products);
             },
    },
    actions:{
        async doGetProducts(context) {
            await fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                context.commit("getProducts",data.products);
            });
        },
    },
    
};