export const CalendarEvent = ({ event }) => {
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
