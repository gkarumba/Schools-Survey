const Safety_And_Security = require('../models').Safety_And_Security;

module.exports = {
  create(req, res) {
    return Safety_And_Security
      .create({
        safety_security: req.body.safety_security,
        natural_disaster: req.body.natural_disaster,
        fire_extinguishers: req.body.fire_extinguishers,
        cctvs: req.body.cctvs,
        fire_drills: req.body.fire_drills,
        doors_windows: req.body.doors_windows,
        security_night: req.body.security_night,
        disaster_plan: req.body.disaster_plan,
        other_safety_measures: req.body.other_safety_measures,
        fire_assembly: req.body.fire_assembly,
        fire_assembly_no: req.body.fire_assembly_no,
        member: req.body.member,
        trainings: req.body.trainings,
        profileId: req.params.profileId,
      })
      .then(safety_and_security => res.status(201).send(safety_and_security))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Safety_And_Security
      .findAll()
      .then(safety_and_security => res.status(200).send(safety_and_security))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Safety_And_Security
      .findByPk(req.params.profileId)
      .then(profile => {
        if (!profile) {
          return res.status(404).send({
            message: 'Safety And Security Table Not Found',
          });
        }
        return res.status(200).send(profile);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Safety_And_Security
      .findByPk(req.params.profileId,
        )
      .then(safety_and_security => {
        if (!safety_and_security) {
          console.log('hello')
          return res.status(404).send({
            message: 'Safety and Security table Not Found',
          });
        }
  
        return safety_and_security
          .update
          // (req.body, { fields: Object.keys(req.body) })
          
          ({
            safety_security: req.body.safety_security || safety_and_security.safety_security,
            natural_disaster: req.body.natural_disaster || safety_and_security.natural_disaster,
            fire_extinguishers: req.body.fire_extinguishers || safety_and_security.fire_extinguishers,
            cctvs: req.body.cctvs || safety_and_security.cctvs,
            fire_drills: req.body.fire_drills || safety_and_security.fire_drills,
            doors_windows: req.body.doors_windows || safety_and_security.doors_windows,
            security_night: req.body.security_night || safety_and_security.security_night,
            other_safety_measures: req.body.other_safety_measures || safety_and_security.other_safety_measures,
            disaster_plan: req.body.disaster_plan || safety_and_security.disaster_plan,
            other_safety_measures: req.body.other_safety_measures || safety_and_security.other_safety_measures,
            fire_assembly: req.body.fire_assembly || safety_and_security.fire_assembly, 
            fire_assembly_no: req.body.fire_assembly_no || safety_and_security.fire_assembly_no,
            member: req.body.member || safety_and_security.member,
            trainings: req.body.trainings || safety_and_security.trainings,
          })
          .then(updatedsafety_and_security => res.status(200).send(updatedsafety_and_security))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Safety_And_Security
      .findByPk(req.params.safety_and_securityId
        // {
        //   where: {
        //     id: req.params.profileId,
        //     todoId: req.params.todoId,
        //   },
        // }
        )
      .then(safety_and_security => {
        if (!safety_and_security) {
          return res.status(404).send({
            message: 'Safety and Security Table Not Found',
          });
        }
        return safety_and_security
          .destroy()
          .then(() => res.status(204).send( {message:'Safety and Security deleted successfully.'}))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};