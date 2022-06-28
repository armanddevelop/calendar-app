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
import { useCalendarStore, useUIStore } from "../../Hooks";

moment.locale("en-us");
const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
  const [view, setView] = useState(localStorage.getItem("lastView") || "month");
  const { showModal } = useUIStore();
  const { events } = useCalendarStore();

  const onDoubleClick = (e) => {
    console.log("esto vale onDoubleClick ", e);
    showModal(true);
  };

  const onSelectEvent = (e) => {
    console.log("esto vale e en onSelectEvent", e);
  };

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
          events={events}
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
