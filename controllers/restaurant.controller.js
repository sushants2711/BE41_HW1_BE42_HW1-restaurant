import restaurantModel from "../models/restaurant.model.js";

export const addRestaurantController = async (req, res) => {
    try {
        const {
            name,
            cuisine,
            location,
            rating,
            reviews,
            website,
            phoneNumber,
            openHours,
            priceRange,
            reservationsNeeded,
            isdeliveryAvailable,
            menuUrl,
            photos,
        } = req.body;

        if (
            !name ||
            !cuisine ||
            !location ||
            !phoneNumber ||
            !priceRange ||
            !menuUrl
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const restaurant = new restaurantModel({
            name,
            cuisine,
            location,
            rating,
            reviews,
            website,
            phoneNumber,
            openHours,
            priceRange,
            reservationsNeeded,
            isdeliveryAvailable,
            menuUrl,
            photos,
        });

        const data = await restaurant.save();

        return res.status(201).json({
            success: true,
            message: "Restaurant data created",
            data: data,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

export const allRestaurantController = async (req, res) => {
    try {
        const allRestaurant = await restaurantModel.find();

        if (!allRestaurant || allRestaurant.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Restaurant data not exist.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Data fetch successfully",
            data: allRestaurant,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

export const restaurantByName = async (req, res) => {
    try {
        const { restaurantName } = req.params;

        if (!restaurantName) {
            return res.status(400).json({
                success: false,
                message: "Restaurant name is missing",
            });
        }

        const restaurantExist = await restaurantModel.findOne({
            name: restaurantName,
        });

        if (!restaurantExist) {
            return res.status(404).json({
                success: false,
                message: "Restaurant not exist",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Data fetch successfully",
            data: restaurantExist,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

export const restaurantByPhone = async (req, res) => {
    try {
        const { phoneNumber } = req.params;

        if (!phoneNumber) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "phone number is missing"
                });
        };

        const PhoneExist = await restaurantModel.findOne({ phoneNumber });

        if (!PhoneExist) {
            return res
                .status(404)
                .json({
                    success: false,
                    message: "Restaurant not exist."
                });
        };

        return res
            .status(200)
            .json({
                success: true,
                message: "Data fetch successfully",
                data: PhoneExist
            })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

export const restaurantByCousine = async (req, res) => {
    try {
        const { cuisineName } = req.params;

        if (!cuisineName) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "cuisine name is missing"
                });
        };

        const cuisineFind = await restaurantModel.find({ cuisine: cuisineName });

        if (!cuisineFind) {
            return res
                .status(404)
                .json({
                    success: false,
                    message: "Restaurant Cuisine not found."
                });
        };

        return res
            .status(200)
            .json({
                success: true,
                message: "Data fetch successfully",
                data: cuisineFind
            })

    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: "Internal Server Error",
                error: error.message
            })
    }
}

export const restaurantLocation = async (req, res) => {
    try {
        const { restaurantLocation } = req.params;

        if (!restaurantLocation) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Restaurant Location is missing"
                });
        };

        const locationOfRestaurant = await restaurantModel.find({ location: restaurantLocation });

        if (!locationOfRestaurant) {
            return res
                .status(404)
                .json({
                    success: false,
                    message: "Restaurant location not found."
                });
        };

        return res
            .status(200)
            .json({
                success: true,
                message: "Data fetch successfully",
                data: locationOfRestaurant
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: "Internal Server Error",
                error: error.message
            })
    }
}