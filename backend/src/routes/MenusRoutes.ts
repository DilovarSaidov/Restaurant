import express from "express";
import MenusController from "../controller/MenusController";

const router = express.Router();

// Send menus
router.get("/menus", MenusController.getAllMenus());

// Filter menus
router.get("/cold-appetizers", MenusController.getAllColdAppetizers());
router.get("/hot-appetizers", MenusController.getAllHotAppetizers());
router.get("/drinks", MenusController.getAllDrinks());
router.get("/grills", MenusController.getAllGrills());
router.get("/meat-dishes", MenusController.getAllMeatDishes());
router.get("/fish-dishes", MenusController.getAllFishDishes());
router.get("/signature-dishes", MenusController.getAllSignatureDishes());
router.get("/soups", MenusController.getAllSoups());

// Add new dish
router.post("/add-dish", MenusController.addDish);

// Delete dihses
router.delete("/delete-dish", MenusController.deleteDishById);

// Edit dishes
router.put("/edit-dish", MenusController.editDish());

export = router;
