'use client';
import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

const schedule = [
  {
    date: "Dzien 1",
    dateTime: "2023-01-01",
    summary: "Dzien 1. Napiszmy co tutaj sie dzieje",
    timeSlots: [
      {
        name: "Imie Nazwisko 111",
        description: "Opis opis opis opis 111111",
        start: "9:00",
        end: "10:00",
      },
      {
        name: "Imie Nazwisko 111",
        description: "Opis opis opis opis 111111",
        start: "10:00",
        end: "11:00",
      },
      {
        name: "Imie Nazwisko 111",
        description: "Opis opis opis opis 111111",
        start: "11:00",
        end: "12:00",
      },
      {
        name: "Lunch",
        description: null,
        start: "12:00",
        end: "1:00",
      },
      {
        name: "Imie Nazwisko 111",
        description: "Opis opis opis opis 111111",
        start: "1:00",
        end: "2:00",
      },
      {
        name: "Imie Nazwisko 111",
        description: "Opis opis opis opis 111111",
        start: "2:00",
        end: "3:00",
      },
      {
        name: "Imie Nazwisko 111",
        description: "Opis opis opis opis 111111",
        start: "3:00",
        end: "4:00",
      },
    ],
  },
  {
    date: "Dzien 2",
    dateTime: "2023-01-02",
    summary: "Dzien 2. Napiszmy co tutaj sie dzieje",
    timeSlots: [
      {
        name: "Imie Nazwisko 222222",
        description: "Opis opis opis opis 22222",
        start: "9:00",
        end: "10:00",
      },
      {
        name: "Imie Nazwisko 222222",
        description: "Opis opis opis opis 22222",
        start: "10:00",
        end: "11:00",
      },
      {
        name: "Imie Nazwisko 222222",
        description: "Opis opis opis opis 22222",
        start: "11:00",
        end: "12:00",
      },
      {
        name: "Lunch",
        description: null,
        start: "12:00",
        end: "1:00",
      },
      {
        name: "Imie Nazwisko 222222",
        description: "Opis opis opis opis 22222",
        start: "1:00",
        end: "2:00",
      },
      {
        name: "Imie Nazwisko 222222",
        description: "Opis opis opis opis 22222",
        start: "2:00",
        end: "3:00",
      },
      {
        name: "Imie Nazwisko 222222",
        description: "Opis opis opis opis 22222",
        start: "3:00",
        end: "4:00",
      },
    ],
  },
  {
    date: "Dzien 3",
    dateTime: "2023-01-03",
    summary: "Dzien 3. Napiszmy co tutaj sie dzieje",
    timeSlots: [
      {
        name: "Imie Nazwisko 333333",
        description: "Opis opis opis opis 33333",
        start: "9:00",
        end: "10:00",
      },
      {
        name: "Imie Nazwisko 333333",
        description: "Opis opis opis opis 33333",
        start: "10:00",
        end: "11:00",
      },
      {
        name: "Imie Nazwisko 333333",
        description: "Opis opis opis opis 33333",
        start: "11:00",
        end: "12:00",
      },
      {
        name: "Lunch",
        description: null,
        start: "12:00",
        end: "1:00",
      },
      {
        name: "Imie Nazwisko 333333",
        description: "Opis opis opis opis 33333",
        start: "1:00",
        end: "2:00",
      },
      {
        name: "Imie Nazwisko 333333",
        description: "Opis opis opis opis 33333",
        start: "2:00",
        end: "3:00",
      },
      {
        name: "Imie Nazwisko 333333",
        description: "Opis opis opis opis 33333",
        start: "3:00",
        end: "4:00",
      },
    ],
  },
];

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let smMediaQuery = window.matchMedia("(min-width: 640px)");

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(smMediaQuery);
    smMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      smMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === "vertical"}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                "relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0",
                dayIndex !== selectedIndex && "opacity-70"
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

function Container({ className, ...props }) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-gray-900">
        {day.summary}
      </p>
    </>
  );
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        "space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur"
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end}`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-gray-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-gray-600">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-blue-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{" "}
            -{" "}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{" "}
          </p>
        </li>
      ))}
    </ol>
  );
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  );
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Program Kongresu
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Tutaj jakis opis, co tutaj chcemy zapisać?
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -bottom-32 -top-40 overflow-hidden bg-indigo-50">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  );
}
