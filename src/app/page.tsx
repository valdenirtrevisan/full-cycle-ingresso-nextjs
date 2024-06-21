import { EventCard } from "@/components/EventCard";
import { Title } from "@/components/Title";
import { EventModel } from "@/models";

async function getEvents(): Promise<EventModel[]> {
  const response = await fetch("http://localhost:8080/events", {
    cache: "no-store",
    next: {
      revalidate: 10, // 10 seconds
    },
  });

  return (await response.json()).events;
}

export default async function HomePage() {
  const events = await getEvents();

  return (
    <main>
      <Title>Eventos disponíveis</Title>
      <div className="mt-8 sm:grid sm:grid-cols-auto-fit-cards flex flex-wrap justify-center gap-x-2 gap-y-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}
