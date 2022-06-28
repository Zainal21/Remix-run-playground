export interface ListItemProps {
  jokes: String;
  content: String;
}

export const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <div className="container flex justify-center my-2 w-full mx-auto">
      <ul className="bg-white rounded-md border border-gray-200 w-full text-gray-900 shadow hover:shadow-md">
        <li className="px-8 py-2 w-full rounded-b-lg">
          <p className="font-bold text-lg">{props.jokes}</p>
          <p className="text-md">{props.content}</p>
        </li>
      </ul>
    </div>
  );
};
