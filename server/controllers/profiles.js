const Profile = require('../models').Profile;
const models  =require('../models/index');

module.exports = {
  create(req, res) {
    return Profile
      .create({
        name: req.body.name,
        password: req.body.password,
        form: req.body.form,
        type: req.body.type,
        capacity: req.body.capacity,
        location: req.body.location,
        post: req.body.post,
        email: req.body.email,
        telephone: req.body.telephone,
        filler: req.body.filler,
        role: req.body.role,
        nemis: req.body.nemis,
        social_media: req.body.social_media,
      })
      .then(profile => res.status(201).send(profile))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Profile
      .findAll()
      .then(profiles => res.status(200).send(profiles))
      .catch(error => res.status(400).send(error));
  },
};