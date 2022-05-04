import { NavBar } from "../ui/NavBar";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const myEventsList = [
  {
    title: "Cumpleaños alicha",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgcolor: "#fafafa",
  },
];
export const CalendarScreen = () => {
  return (
    <>
      <NavBar />
      <div className="calendar__screen__content">
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </>
  );
};
