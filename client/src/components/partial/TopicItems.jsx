import CodeBlock from "./CodeBlock";

export default function TopicItem({ topic }) {
  return (
    <div className="mb-6">
      <h4 className="text-md font-medium">{topic.name}</h4>
      {topic.description && <p className="text-sm mb-1">{topic.description}</p>}
      {topic.image && (
        <img
          src={topic.image}
          alt={topic.name}
          className="my-2 rounded-md w-full max-w-md"
        />
      )}
      {topic.code && <CodeBlock code={topic.code} />}
    </div>
  );
}
