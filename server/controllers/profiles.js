const Profile = require('../models').Profile;
const Safety_And_Security  =require('../models').Safety_And_Security;

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
      .findAll({
        include: [{
          model: Safety_And_Security,
          as: 'safety_and_securities'
        }]
      })
      .then(profiles => res.status(200).send(profiles))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Profile
      .findByPk(req.params.profileId,
      //  { where: {
      //   id: req.params.profileId
      //  }  
      //   }, 
      {
        include: [{
          model: Safety_And_Security,
          as: 'safety_and_securities',
        }],
      })
      .then(profile => {
        if (!profile) {
          return res.status(404).send({
            message: 'Profile Not Found',
          });
        }
        return res.status(200).send(profile);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Profile
      .findByPk(req.params.profileId, {
        include: [{
          model: Safety_And_Security,
          as: 'safety_and_securities',
        }],
      })
      .then(profile => {
        if (!profile) {
          return res.status(404).send({
            message: 'Profile Not Found',
          });
        }
        return profile
          .update({
            name: req.body.name || profile.name,
            password: req.body.password || profile.password,
            form: req.body.form || profile.form,
            type: req.body.type || profile.type,
            capacity: req.body.capacity || profile.capacity,
            location: req.body.location || profile.location,
            post: req.body.post || profile.post,
            email: req.body.email || profile.email,
            telephone: req.body.telephone || profile.telephone ,
            filler: req.body.filler || profile.filler,
            role: req.body.role || profile.role ,
            nemis: req.body.nemis || profile.nemis,
            social_media: req.body.social_media || profile.social_media,
          })
          .then(() => res.status(200).send(profile))  // Send back the updated Profile.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Profile
      .findByPk(req.params.profileId)
      .then(profile => {
        if (!profile) {
          return res.status(400).send({
            message: 'Profile Not Found',
          });
        }
        return profile
          .destroy()
          .then(() => res.status(200).send({ message: 'Profile deleted successfully.' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};