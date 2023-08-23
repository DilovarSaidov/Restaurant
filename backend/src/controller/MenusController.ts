import { MenusModel } from "../models/MenusModel";
import { Request, Response } from "express";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export default class MenusController {
  // Send all menus
  static getAllMenus() {
    return async (req: Request, res: Response) => {
      try {
        const list = await MenusModel.getMenus();
        if (list.length !== 0) {
          return res.json(list);
        } else {
          return res.status(404).json({ error: "Menus not found" });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get Menus" });
      }
    };
  }

  // Send cold appetizers
  static getAllColdAppetizers() {
    return async (req: Request, res: Response) => {
      try {
        const list = await MenusModel.getColdAppetizers();
        if (list.length !== 0) {
          return res.json(list);
        } else {
          return res.status(404).json({ error: "Cold appetizers not found" });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get Cold appetizers" });
      }
    };
  }

  // Send hot appetizers
  static getAllHotAppetizers() {
    return async (req: Request, res: Response) => {
      try {
        const list = await MenusModel.getHotAppetizers();
        if (list.length !== 0) {
          return res.json(list);
        } else {
          return res.status(404).json({ error: "Hot appetizers not found" });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get hot appetizers" });
      }
    };
  }

  // Send drinks
  static getAllDrinks() {
    return async (req: Request, res: Response) => {
      try {
        const list = await MenusModel.getDrinks();
        if (list.length !== 0) {
          return res.json(list);
        } else {
          return res.status(404).json({ error: "Driks not found" });
        }
      } catch (error) {
        return res.status(500).json({ error: "Failed to get drinks" });
      }
    };
  }

  // Send grills
  static getAllGrills() {
    return async (req: Request, res: Response) => {
      try {
        const list = await MenusModel.getGrills();
        if (list.length !== 0) {
          return res.json(list);
        } else {
          return res.status(404).json({ error: "Grills not found" });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get grills" });
      }
    };
  }

  // Send meat dishes
  static getAllMeatDishes() {
    return async (req: Request, res: Response) => {
      try {
        const list = await MenusModel.getMeatDishes();
        if (list.length !== 0) {
          return res.json(list);
        } else {
          return res.status(404).json({ error: "Meat dishes not found" });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get meat dishes" });
      }
    };
  }

  // Send fish dishes
  static getAllFishDishes() {
    return async (req: Request, res: Response) => {
      try {
        const list = await MenusModel.getFishDishes();
        if (list.length !== 0) {
          return res.json(list);
        } else {
          return res.status(404).json({ error: "Fish dishes not found" });
        }
      } catch (error) {
        return res.status(500).json({ error: "Failed to get Fish dishes" });
      }
    };
  }

  // Send signature dishes
  static getAllSignatureDishes() {
    return async (req: Request, res: Response) => {
      try {
        const list = await MenusModel.getSignatureDishes();
        if (list.length !== 0) {
          return res.json(list);
        } else {
          return res.status(404).json({ error: "Signature dishes not found" });
        }
      } catch (error) {
        console.error(error);
        return res
          .status(500)
          .json({ error: "Failed to get signature dishes" });
      }
    };
  }

  // Send soups
  static getAllSoups() {
    return async (req: Request, res: Response) => {
      try {
        const soups = await MenusModel.getSoups();
        if (soups.length !== 0) {
          return res.json(soups);
        } else {
          return res.status(404).json({ error: "Soups not found" });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to get soups" });
      }
    };
  }

  // Add new dish from menu
  static addDish = [
    upload.single("photo"),
    async (req: any, res: Response) => {
      const { name, price, description, weight, type } = req.body;
      try {
        await MenusModel.AddDish(
          name,
          price,
          description,
          weight,
          req.file.buffer,
          type
        );
        return res.status(201).json("Dish added successfully");
      } catch (error) {
        console.error(error);
        return res.status(500).json("Failed to add dish");
      }
    },
  ];

  // Delete dish by id
  static async deleteDishById(req: any, res: Response) {
    const { id } = req.query;
    try {
      const deleteRowCount = await MenusModel.DeleteDishById(id);
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

  // Edit dish
  static editDish() {
    return [
      upload.single("photo"),
      async (req: any, res: Response) => {
        const { id, name, price, description, weight, type } = req.body;
        try {
          await MenusModel.EditDish(
            id,
            name,
            price,
            description,
            weight,
            req.file.buffer,
            type
          );
          return res.status(200).json("Dish edited successfully");
        } catch (error) {
          console.error(error);
          res.status(500).json("Failed to edit  dish");
        }
      },
    ];
  }
}
