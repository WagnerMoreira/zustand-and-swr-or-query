export default function Tile({ data }) {
  return (
    <div className="rounded-lg bg-gray-400 w-64 h-64 m-4 flex flex-col items-center justify-center">
      <p>name: {data.name}</p>
      <br />
      <p>order: {data.order}</p>
    </div>
  );
}
