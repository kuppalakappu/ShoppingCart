export type Cart = {

    id: number,
        userId: number,
        date: string,
        products: ProductDesc[]

       

        }
     
     export type CartItem={
        date: string,
        product: Product |undefined
        quantity: number
     }

export type ProductDesc = {
    productId: number,
                quantity: number

}
 export type Product = {


            id: number,
        title: string,
        price: number,
        description:string,
        category:string,
        image: string,
        rating:  Rating
 } 
    
        

        export type Rating = {


          
                rate: number,
                count: number
        }

