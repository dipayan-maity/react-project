export default function Card({ title, description }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white dark:bg-gray-800">
      <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{title}</div>
      <p className="text-gray-700 dark:text-gray-300 text-base">{description}</p>
    </div>
  );
}
