import { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { messages } from "../../utils/calendarTrasnlationsES";
import { NavBar } from "../ui/NavBar";
import { CalendarEvent } from "./CalendarEvent";
import "moment/locale/es-mx";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { onViewChange } from "../../utils/calendarEvents";
import { CalendarModal } from "./CalendarModal";
import { FabAddNew } from "../FloatingActionButton/FabAddNew";
import { FabbDelete } from "../FloatingActionButton/FabbDelete";
import { useCalendarStore, useUIStore } from "../../Hooks";

moment.locale("en-us");
const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
  const [view, setView] = useState(localStorage.getItem("lastView") || "month");
  const { showModal } = useUIStore();
  const { events, setActiveEvent } = useCalendarStore();

  const onDoubleClick = (e) => {
    showModal(true);
  };

  const onSelectEvent = (evt) => {
    console.log("esto vale e en onSelectEvent", evt);
    setActiveEvent(evt);
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
        <FabAddNew />
        <FabbDelete />
      </div>
    </>
  );
};
