const { Country, Trip } = require("../models");

exports.showTrip = async (req, res) => {
  try {
    const trip = await Trip.findAll({
      include: {
        model: Country,
        as: "country",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["countryId", "createdAt", "updatedAt"],
      },
    });

    res.status(200).send({
      message: "response success",
      data: trip,
    });
  } catch (err) {
    console.log(err);
    response.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.showTripDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const detailTrip = await Trip.findOne({
      include: {
        model: Country,
        as: "country",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      where: {
        id,
      },
      attributes: {
        exclude: ["countryId", "createdAt", "updatedAt"],
      },
    });

    if (!detailTrip)
      return res.status(400).send({
        message: `Trip with id: ${id} is not existed`,
      });

    res.status(200).send({
      message: "response Success",
      data: detailTrip,
    });
  } catch (error) {
    console.log(err);
    response.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.createTrip = async (req, res) => {
  try {
    const addTrip = await Trip.create(req.body, {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).send({
      message: "Trip has been Created",
      data: addTrip,
    });
  } catch (error) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.updateTrip = async (req, res) => {
  try {
    const { id } = req.params;

    const editTrip = await Trip.update(req.body, {
      where: {
        id,
      },
    });
    res.status(200).send({
      message: "Trip has been Updated",
      data: {
        editTrip,
      },
    });
  } catch (error) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.deleteTrip = async (req, res) => {
  try {
    const { id } = req.params;

    const dropTrip = await Trip.destroy(req.body, {
      where: {
        id,
      },
    });
    res.status(200).send({
      message: "Trip has been Delete",
      data: {
        dropTrip,
      },
    });
  } catch (error) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};
