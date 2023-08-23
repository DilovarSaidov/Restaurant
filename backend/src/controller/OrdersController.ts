import { OrdersModel } from "../models/OrdersModel";
import { Response, Request } from "express";

export default class OrdersController {
  // Send all orders
  static getAllOrders() {
    return async (req: Request, res: Response) => {
      try {
        const list = await OrdersModel.getHistoryOfOrders();
        return res.json(list);
      } catch (error) {
        console.error(error);
        return res.status(500).json("Failed to get orders");
      }
    };
  }

  // Adding an order to the order history
  static addOrder() {
    return async (req: Request, res: Response) => {
      const { name, photo, street, homeNumber, comment, date, sum } = req.body;
      try {
        const result = await OrdersModel.AddOrdertoHistory(
          name,
          photo,
          street,
          homeNumber,
          comment,
          date,
          sum
        );

        if (result != null) {
          return res.status(201).json("Order added successfully");
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json("Failed to add order");
      }
    };
  }

  static async deleteOrder(req: any, res: Response) {
    const { id } = req.query;
    try {
      const deleteRowCount = await OrdersModel.DeleteOrder(id);
      if (deleteRowCount === 0) {
        return res.status(404).json("Dish not found");
      } else {
        return res.status(200).json("Dish deleted successfully");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json("Failed to delete  dish");
    }
  }
}
