import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { messages } from "../../utils/calendarTrasnlationsES";
import { NavBar } from "../ui/NavBar";
import { CalendarEvent } from "./CalendarEvent";
import "moment/locale/es-mx";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { onViewChange } from "../../utils/calendarEvents";
import { CalendarModal } from "./CalendarModal";

moment.locale("es-mx");
const localizer = momentLocalizer(moment);
const myEventsList = [
  {
    title: "Cumpleaños alicha",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgcolor: "#fafafa",
    notes: "alicha hehuche",
    user: {
      _id: "12346",
      name: "licha",
    },
  },
];
const onDoubleClick = (e) => {
  console.log("esto vale onDoubleClick ", e);
};
const onSelectEvent = (e) => {
  console.log("esto vale e en onSelectEvent", e);
};

export const CalendarScreen = () => {
  const [view, setView] = useState(localStorage.getItem("lastView") || "month");
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
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelectEvent}
          onView={(e) => onViewChange(e, setView)}
          view={view}
          components={{
            event: CalendarEvent,
          }}
        />
        <CalendarModal />
      </div>
    </>
  );
};
