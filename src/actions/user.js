import { SET_USER_PURCHASES } from "./types";

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 8.02,
        orderNumber: "A000B7D6",
        oderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Michael Pinto",
          shippingAddress: "1234 W State St"
        }
      },
      {
        _id: 1,
        total: 18.02,
        orderNumber: "A100B7D6",
        oderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Jim Bob",
          shippingAddress: "456 W State St"
        }
      },
      {
        _id: 2,
        total: 81.02,
        orderNumber: "A330B7D6",
        oderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Ralph Guy",
          shippingAddress: "8989 W State St"
        }
      },
      {
        _id: 3,
        total: 34.02,
        orderNumber: "A888B7D6",
        oderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Chrispy Fries",
          shippingAddress: "3333 W State St"
        }
      },
      {
        _id: 4,
        total: 8.2,
        orderNumber: "A123B7D6",
        oderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Al Pacino",
          shippingAddress: "5678 W State St"
        }
      },
      {
        _id: 5,
        total: 23.02,
        orderNumber: "A555B7D6",
        oderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Louis Lewis",
          shippingAddress: "1564 W State St"
        }
      },
      {
        _id: 6,
        total: 10.02,
        orderNumber: "A234B7D6",
        oderDate: new Date(),
        creditCard: "-0000",

        user: {
          name: "Paul Revere",
          shippingAddress: "0909 W State St"
        }
      },
      {
        _id: 7,
        total: 83.02,
        orderNumber: "A000BBBB",
        oderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Tim Taratula",
          shippingAddress: "1 W State St"
        }
      }
    ]
  };
}
