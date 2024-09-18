const express = require("express");
const UserContractor = require("../controller/Company");
const LaborController = require("../controller/laborController");

const routerLabor = express.Router();

routerLabor.post("/create" , LaborController.CreateLabor);
routerLabor.get("/read" , LaborController.ReadLabor);
routerLabor.put("/Update" , LaborController.UpdateLabor);
routerLabor.delete("/delete" , LaborController.DeleteLabor);


module.exports = routerLabor;