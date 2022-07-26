import moment from "moment";

export const convertDateEvents = (events = []) => {
  return events.map((event) => {
    event.start = moment(event.start);
    event.end = moment(event.end);
    return event;
  });
};
