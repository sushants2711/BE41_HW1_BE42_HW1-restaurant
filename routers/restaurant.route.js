import express from "express";
import {
    addRestaurantController,
    allRestaurantController,
    restaurantByCousine,
    restaurantByName,
    restaurantByPhone,
    restaurantLocation,
} from "../controllers/restaurant.controller.js";

const restaurantRouter = express.Router();

restaurantRouter.route("/add").post(addRestaurantController);
restaurantRouter.route("/").get(allRestaurantController);
restaurantRouter.route("/:restaurantName").get(restaurantByName);
restaurantRouter.route("/directory/:phoneNumber").get(restaurantByPhone);
restaurantRouter.route("/cuisine/:cuisineName").get(restaurantByCousine);
restaurantRouter.route("/location/:restaurantLocation").get(restaurantLocation);
export default restaurantRouter;
