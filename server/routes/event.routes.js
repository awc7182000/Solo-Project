const EventController = require("../controllers/event.controller");

module.exports = app => {
  app.get("/api/events/", EventController.findAllEvents);
  app.get("/api/events/:id", EventController.findOneSingleEvent);
  app.put("/api/events/update/:id", EventController.updateExistingEvent);
  app.post("/api/events/new", EventController.createNewEvent);
  app.delete("/api/events/delete/:Phone", EventController.deleteAnExistingEvent);
};