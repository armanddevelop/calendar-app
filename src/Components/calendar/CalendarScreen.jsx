import { NavBar } from "../ui/NavBar";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { messages } from "../../utils/calendarTrasnlationsES";
import "moment/locale/es-mx";
moment.locale("es-mx");
const localizer = momentLocalizer(moment);
const myEventsList = [
  {
    title: "Cumpleaños alicha",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgcolor: "#fafafa",
    notes: "alicha hehuche",
  },
];
export const CalendarScreen = () => {
  const eventStyleGetter = (...args) => {
    const { start, end, title } = args[0];
    const style = {
      backgroundColor: "#367CF7",
      boderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };
    return { style };
  };
  return (
    <>
      <NavBar />
      <div className="calendar__screen__content">
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
          eventPropGetter={eventStyleGetter}
        />
      </div>
    </>
  );
};
