import { Link } from "@remix-run/react";
import { ListItem } from "~/components/list-item";
import { MainLayout } from "~/layouts/main-layout";
const getJokesList = () => {
  return [
    {
      name: "Road worker",
      content: `I never wanted to believe that my Dad was stealing from his job as a road worker. But when I got home, all the signs were there.`,
    },
    {
      name: "Frisbee",
      content: `I was wondering why the frisbee was getting bigger, then it hit me.`,
    },
    {
      name: "Trees",
      content: `Why do trees seem suspicious on sunny days? Dunno, they're just a bit shady.`,
    },
    {
      name: "Skeletons",
      content: `Why don't skeletons ride roller coasters? They don't have the stomach for it.`,
    },
    {
      name: "Hippos",
      content: `Why don't you find hippopotamuses hiding in trees? They're really good at it.`,
    },
    {
      name: "Dinner",
      content: `What did one plate say to the other plate? Dinner is on me!`,
    },
    {
      name: "Elevator",
      content: `My first time using an elevator was an uplifting experience. The second time let me down.`,
    },
  ];
};
export default function Jokes() {
  const jokes = getJokesList();
  return (
    <MainLayout>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Jokes🥴</h1>
        </div>
      </header>
      <main>
        <div className="max-w-full w-xl mx-auto py-5 sm:px-6 lg:px-8">
          {jokes.map((item, index) => (
            <ListItem
              key={index}
              jokes={`${item.name}😃`}
              content={item.content}
            />
          ))}
          <div className="flex space-x-2 justify-center">
            <Link
              to="/"
              className="inline-block px-6 py-2.5 hover:shadow-md bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Go To Home
            </Link>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
