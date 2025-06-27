export default function FeatureList({ features }) {
  return (
    <ul className="list-disc list-inside mb-4">
      {features.map((f, i) => (
        <li key={i} className="text-sm">{f}</li>
      ))}
    </ul>
  );
}
