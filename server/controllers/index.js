const controllers = {
  getTitle: function(req, res) {
      res.status(200).send("Taulia Technical Assessment");
  }
}

module.exports = controllers;