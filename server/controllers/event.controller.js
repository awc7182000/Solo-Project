const Event = require("../models/events.model");

module.exports.findAllEvents = (req, res) => {
  Event.find()
    .then(allDaEvents => res.json({ Events: allDaEvents }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleEvent = (req, res) => {
	Event.findOne({ _id: req.params.id })
		.then(oneSingleEvent => res.json({ Event: oneSingleEvent }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewEvent = (req, res) => {
  Event.create(req.body)
    .then(newlyCreatedEvent => res.json({ Event: newlyCreatedEvent }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// module.exports.addVolunteer = (req, res) => {
//   Event.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .then(updatedEvent => res.json({ Event: updatedEvent }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.removeVolunteer = (req, res) => {
//   Event.findOneAndDelete({ _id: req.params.id }, req.body, { new: true })
//     .then(updatedEvent => res.json({ Event: updatedEvent }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

module.exports.updateExistingEvent = (req, res) => {
  Event.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedEvent => res.json({ Event: updatedEvent }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingEvent = (req, res) => {
  Event.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
