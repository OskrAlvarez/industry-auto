interface Schedule {
  id: number;
  day: string;
  scheduleTime: string;
}

const scheduleArray: Schedule[] = [
  { id: 1, day: "Monday", scheduleTime: " 10:00 A.M. - 7:00 P.M." },
  { id: 2, day: "Tuesday", scheduleTime: " 10:00 A.M. - 7:00 P.M." },
  { id: 3, day: "Wednesday", scheduleTime: " 10:00 A.M. - 7:00 P.M." },
  { id: 4, day: "Thursday", scheduleTime: " 10:00 A.M. - 7:00 P.M." },
  { id: 5, day: "Friday", scheduleTime: "10:00 A.M. - 7:00 P.M." },
  { id: 6, day: "Saturday", scheduleTime: "10:00 A.M. - 7:00 P.M." },
  { id: 7, day: "Sunday", scheduleTime: "10:00 A.M. - 7:00 P.M." },
];

export function Schedule() {
  return (
    <section className="w-full bg-red-700 p-10 text-white">
      <div className="flex flex-col max-w-[1000px] mx-auto gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl md:text-4xl uppercase text-center font-bold pb-2">
            Know our Hours:
          </h2>
         
        </div>
        <div>
          <p className="text-center font-bold text-xl pb-4">Store Hours: </p>
          <div>
            {scheduleArray.map((scheduleData) => (
              <div key={scheduleData.id} className="flex w-full items-center justify-between">
                <p>{scheduleData.day}: </p>
                <p className="pl-5"> {scheduleData.scheduleTime}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
