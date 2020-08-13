const express = require("express");

const router = express.Router();

const {
  showCountry,
  showCountryDetail,
  createCountry,
  updateCountry,
} = require("../controller/country");

const {
  showTrip,
  showTripDetail,
  createTrip,
  updateTrip,
  deleteTrip,
} = require("../controller/trip");

router.get("/country", showCountry);
router.get("/country/:id", showCountryDetail);
router.post("/country", createCountry);
router.patch("/country/:id", updateCountry);

router.get("/trip", showTrip);
router.get("/trip/:id", showTripDetail);
router.post("/trip", createTrip);
router.patch("/trip/:id", updateTrip);
router.delete("/trip/:id", deleteTrip);

module.exports = router;
