import { pool } from "../db";

export class OrdersModel {
  // Send Orders
  static async getHistoryOfOrders(): Promise<any> {
    const result = await pool.query("SELECT FROM orders");
    return result.rows;
  }

  // Adding an order to the order history
  static async AddOrdertoHistory(
    name: string,
    phone: number,
    street: string,
    homeNumber: number,
    comment: string,
    date: number,
    sum: number
  ) {
    try {
      const query = {
        text: "INSERS INTO orders (name, phone, street, homeNumber, comment,date ,sum) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        values: [name, phone, street, homeNumber, comment, date, sum],
      };
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error(error);
    }
  }

  // Delete order
  static async DeleteOrder(id: number) {
    try {
      const result = await pool.query("DELETE FROM orders WHERE id = $1", [id]);
      return result.rowCount;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }
}
