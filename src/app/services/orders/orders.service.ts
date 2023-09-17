// orders.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private ordersServiceObject: any[] = [
    {
      image: "/assets/images/potato.jpg",
      status: "Ordered",
      dateOfArrival: "Aug 01",
      productTitle: "Potato",
      id: 1,

      orderId: "#1",
      dateAdded: "1/8/2023",
      subTotal: "$7.34",
      deliveryCharges: "$2.0",
      refundableBags: "$1.0",
      total: "$10.34",
      codReceived: "$0.00",
      stripeFundsReceived: "$0.00",
      fundsOnHold: "$10.00",
      paymentMethod: "Credit Card / Debit Card",
      shippingMethod: "Delivery",
      items: [
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
      ]
    },
    {
      image: "/assets/images/potato.jpg",
      status: "Ordered",
      dateOfArrival: "Aug 01",
      productTitle: "Potato",
      id: 2,

      orderId: "#2",
      dateAdded: "1/8/2023",
      subTotal: "$7.34",
      deliveryCharges: "$2.0",
      refundableBags: "$1.0",
      total: "$10.34",
      codReceived: "$0.00",
      stripeFundsReceived: "$0.00",
      fundsOnHold: "$10.00",
      paymentMethod: "Credit Card / Debit Card",
      shippingMethod: "Delivery",
      items: [
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
      ]
    },
    {
      image: "/assets/images/potato.jpg",
      status: "Ordered",
      dateOfArrival: "Aug 01",
      productTitle: "Potato",
      id: 3,

      orderId: "#3",
      dateAdded: "1/8/2023",
      subTotal: "$7.34",
      deliveryCharges: "$2.0",
      refundableBags: "$1.0",
      total: "$10.34",
      codReceived: "$0.00",
      stripeFundsReceived: "$0.00",
      fundsOnHold: "$10.00",
      paymentMethod: "Credit Card / Debit Card",
      shippingMethod: "Delivery",
      items: [
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
      ]
    },
    {
      image: "/assets/images/potato.jpg",
      status: "Ordered",
      dateOfArrival: "Aug 01",
      productTitle: "Potato",
      id: 4,

      orderId: "#4",
      dateAdded: "1/8/2023",
      subTotal: "$7.34",
      deliveryCharges: "$2.0",
      refundableBags: "$1.0",
      total: "$10.34",
      codReceived: "$0.00",
      stripeFundsReceived: "$0.00",
      fundsOnHold: "$10.00",
      paymentMethod: "Credit Card / Debit Card",
      shippingMethod: "Delivery",
      items: [
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
      ]
    },
    {
      image: "/assets/images/potato.jpg",
      status: "Ordered",
      dateOfArrival: "Aug 01",
      productTitle: "Potato",
      id: 5,

      orderId: "#5",
      dateAdded: "1/8/2023",
      subTotal: "$7.34",
      deliveryCharges: "$2.0",
      refundableBags: "$1.0",
      total: "$10.34",
      codReceived: "$0.00",
      stripeFundsReceived: "$0.00",
      fundsOnHold: "$10.00",
      paymentMethod: "Credit Card / Debit Card",
      shippingMethod: "Delivery",
      items: [
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        }
      ]
    },
    {
      image: "/assets/images/potato.jpg",
      status: "Ordered",
      dateOfArrival: "Aug 01",
      productTitle: "Potato",
      id: 6,

      orderId: "#6",
      dateAdded: "1/8/2023",
      subTotal: "$7.34",
      deliveryCharges: "$2.0",
      refundableBags: "$1.0",
      total: "$10.34",
      codReceived: "$0.00",
      stripeFundsReceived: "$0.00",
      fundsOnHold: "$10.00",
      paymentMethod: "Credit Card / Debit Card",
      shippingMethod: "Delivery",
      items: [
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
      ]
    },
    {
      image: "/assets/images/potato.jpg",
      status: "Ordered",
      dateOfArrival: "Aug 01",
      productTitle: "Potato",
      id: 7,

      orderId: "#7",
      dateAdded: "1/8/2023",
      subTotal: "$7.34",
      deliveryCharges: "$2.0",
      refundableBags: "$1.0",
      total: "$10.34",
      codReceived: "$0.00",
      stripeFundsReceived: "$0.00",
      fundsOnHold: "$10.00",
      paymentMethod: "Credit Card / Debit Card",
      shippingMethod: "Delivery",
      items: [
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
        {
          image: "/assets/images/potato.jpg",
          productTitle: "potato",
          productWeight: "1000g",
          noPices: "2",
          productCost: "$25"
        },
      ]
    },

    // Add more products as needed
  ];

  constructor() { }

  // Method to get the list of products
  getOrderProducts() {
    return this.ordersServiceObject;
  }

  // Method to fetch product details based on the product ID
  getOrderProductDetails(productId: number): any {
    // Find the product with the specified ID
    return this.ordersServiceObject.find(product => product.id == productId);
  }
}


