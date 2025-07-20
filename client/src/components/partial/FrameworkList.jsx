export default function FrameworkList({ frameworks }) {
  return (
    <div className="mb-4">
      {frameworks.map((fw, i) => (
        <p key={i} className="text-sm mb-2">- {fw}</p>
      ))}
    </div>
  );
}
