// orderers.service.ts
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class OrdersVersion2Service {
    private orderedData: any[] = [
        {
            orderId: "#1",
            orderImage:"/assets/basket.jpg",
            totalCost: "34.02",
            orderedDate: "mon, 31 Jul, 1:00pm",
            orderStatus: "ordered",
            orderMessage: "your oders successfully placed",
            orderItemSize: "2",
            subTotal: "$107.63",
            tax: "$0.5",
            deliveryCharges: "$0.6",
            paymentMethod: "Cash On Delivery",
            deliveryTo: "miss machi",
            items: [
                {
                    image: "/assets/images/potato.jpg",
                    productTitle:"potato",
                    productWeight: "1000g",
                    noPices: "2",
                    productCost: "$25"
                },
                {
                    image: "/assets/images/potato.jpg",
                    productTitle:"potato",
                    productWeight: "1000g",
                    noPices: "2",
                    productCost: "$25"
                },
            ]
        },
        {
            orderId: "#2",
            orderImage:"/assets/basket.jpg",
            totalCost: "34.02",
            orderedDate: "mon, 31 Jul, 1:00pm",
            orderStatus: "cancelled",
            orderMessage: "As per your request order cancelled",
            orderItemSize: "3",
            subTotal: "$107.63",
            tax: "$0.5",
            deliveryCharges: "$0.6",
            paymentMethod: "Cash On Delivery",
            deliveryTo: "miss machi",
            items: [
                {
                    image: "/assets/images/potato.jpg",
                    productTitle:"potato",
                    productWeight: "1000g",
                    noPices: "2",
                    productCost: "$25"
                },
                {
                    image: "/assets/images/potato.jpg",
                    productTitle:"potato",
                    productWeight: "1000g",
                    noPices: "2",
                    productCost: "$25"
                },
                {
                    image: "/assets/images/potato.jpg",
                    productTitle:"potato",
                    productWeight: "1000g",
                    noPices: "2",
                    productCost: "$25"
                },
            ]
        },
        {
            orderId: "#3",
            orderImage:"/assets/basket.jpg",
            totalCost: "34.02",
            orderedDate: "mon, 31 Jul, 1:00pm",
            orderStatus: "ordered",
            orderMessage: "your oders successfully placed",
            orderItemSize: "5",
            subTotal: "$107.63",
            tax: "$0.5",
            deliveryCharges: "$0.6",
            paymentMethod: "Cash On Delivery",
            deliveryTo: "miss machi",
            items: [
                {
                    image: "/assets/images/potato.jpg",
                    productTitle:"potato",
                    productWeight: "1000g",
                    noPices: "2",
                    productCost: "$25"
                },
                {
                    image: "/assets/images/potato.jpg",
                    productTitle:"potato",
                    productWeight: "1000g",
                    noPices: "2",
                    productCost: "$25"
                },
                {
                    image: "/assets/images/potato.jpg",
                    productTitle:"potato",
                    productWeight: "1000g",
                    noPices: "2",
                    productCost: "$25"
                },
                {
                    image: "/assets/images/potato.jpg",
                    productTitle:"potato",
                    productWeight: "1000g",
                    noPices: "2",
                    productCost: "$25"
                },
                {
                    image: "/assets/images/potato.jpg",
                    productTitle:"potato",
                    productWeight: "1000g",
                    noPices: "2",
                    productCost: "$25"
                },
            ]
        },
        {
            orderId: "#4",
            orderImage:"/assets/basket.jpg",
            totalCost: "34.02",
            orderedDate: "mon, 31 Jul, 1:00pm",
            orderStatus: "cancelled",
            orderMessage: "As per your request order cancelled",
            orderItemSize: "1",
            subTotal: "$107.63",
            tax: "$0.5",
            deliveryCharges: "$0.6",
            paymentMethod: "Cash On Delivery",
            deliveryTo: "miss machi",
            items: [
                {
                    image: "/assets/images/potato.jpg",
                    productTitle:"potato",
                    productWeight: "1000g",
                    noPices: "2",
                    productCost: "$25"
                }
            ]
        },
        
        // Add more products as needed
    ];

    constructor() { }

    // Method to get the list of products
    getOrderProducts(): any[] {
        return this.orderedData;
    }

    // Method to fetch product details based on the product ID
    getOrderProductDetails(productId:any){
        // Find the product with the specified ID
        // return this.orderedData.find(product => product.id == productId);
        return productId
    }
}
