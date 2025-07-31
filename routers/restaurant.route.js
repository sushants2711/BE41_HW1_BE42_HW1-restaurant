import express from "express";
import {
    addRestaurantController,
    allRestaurantController,
    restaurantByCousine,
    restaurantByName,
    restaurantByPhone,
    restaurantDelete,
    restaurantLocation,
    restaurantUpdate,
} from "../controllers/restaurant.controller.js";

const restaurantRouter = express.Router();

restaurantRouter.route("/add").post(addRestaurantController);
restaurantRouter.route("/").get(allRestaurantController);
restaurantRouter.route("/:restaurantName").get(restaurantByName);
restaurantRouter.route("/directory/:phoneNumber").get(restaurantByPhone);
restaurantRouter.route("/cuisine/:cuisineName").get(restaurantByCousine);
restaurantRouter.route("/location/:restaurantLocation").get(restaurantLocation);
restaurantRouter.route("/delete/:restaurantId").delete(restaurantDelete)
restaurantRouter.route("/update/:id").put(restaurantUpdate)


export default restaurantRouter;
