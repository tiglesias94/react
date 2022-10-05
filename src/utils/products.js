import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

const products = [
    {id:'alfa-N-6', title:'Alfajor Negro Caja x6u', description:"string", price:100, pictureURL:"https://lasrecetasdelchef.net/wp-content/uploads/2020/08/alfajor-triple.jpg", stock:'0', category:"alfnegro"},
    {id:'alfa-N-12', title:'Alfajor Negro Caja x12u', description:"string", price:100, pictureURL:"https://lasrecetasdelchef.net/wp-content/uploads/2020/08/alfajor-triple.jpg", stock:'0', category:"alfnegro"},
    {id:'alfa-B-6', title:'Alfajor Blanco Caja x6u', description:"string", price:100, pictureURL:"https://cachafaz.com/wp-content/uploads/2019/10/Productos-Alfajor-choco-bco.jpg", stock:'0', category:"alfblanco"},
    {id:'alfa-B-12', title:'Alfajor Blanco Caja x12u', description:"string", price:100, pictureURL:"https://cachafaz.com/wp-content/uploads/2019/10/Productos-Alfajor-choco-bco.jpg", stock:'0', category:"alfblanco"}
    ];

    export const getAllProducts = ()=>{
        const promise = new Promise((resolve)=>{
            setTimeout(()=>{
                return resolve(products);
            },2000) 
        })
        return promise
    };

    export const getProductsByCategory = (categoryId)=>{
        const promise = new Promise((resolve)=>{
            const results = products.filter((item) => item.category === categoryId);
            setTimeout(()=>{
                return resolve(results);
            },2000) 
        })
        return promise
    };

    export const getProduct = (id)=>{
        const promise = new Promise((resolve)=>{
            const result = products.find((item) => item.id === id)
            setTimeout(()=>{
                return resolve(result);
            },2000) 
        })
        return promise
    }