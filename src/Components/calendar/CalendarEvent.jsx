export const CalendarEvent = ({ event }) => {
  //console.log("this is the value of event ", event);
  const { title, notes, user } = event;
  return (
    <>
      <div>
        <strong>{title}</strong>
      </div>
      <div>
        <span>{notes}</span>
      </div>
      <div>
        <strong>--{user.name}</strong>
      </div>
    </>
  );
};
