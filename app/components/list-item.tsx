export interface ListItemProps {
  jokes: String;
  content: String;
}

export const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <div className="container flex justify-center  mx-auto my-2">
      <ul className="bg-white shadow-md rounded-sm border border-gray-200 w-screen text-gray-900 shadow hover:shadow-md mx-2">
        <li className="px-8 py-2 max-w-full rounded-b-lg">
          <p className="font-bold text-lg">{props.jokes}</p>
          <p className="text-md">{props.content}</p>
        </li>
      </ul>
    </div>
  );
};
