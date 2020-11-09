const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
	name: {
		type:String,
		required: [true, "Name is required"],
		minlength:[1,"Name must be at least 1 character long"],
	},
	date: {
		type:String,
		required: [false, "Date is not required"],
		minlength:[1,"date must be at least 1 character long"],
	},
	volunteers: [],
	link: {
		type: String,
	},
	image: {
		type: String,
		required: [false, "Image is not required"],
	},
	description: {
		type: String,
		required: [true, "description is required"],
		minlength:[1,"description must be at least 1 character long"],
	}
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;