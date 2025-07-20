export default function CodeBlock({ code }) {
  return (
    <pre className="mt-2 bg-gray-300 p-4 rounded-md overflow-x-auto text-sm">
      <code>{code}</code>
    </pre>
  );
}
