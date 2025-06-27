import SectionRenderer from "./SectionRender";

export default function TopicContent({ topic, content, activeIndex }) {
  const section = content?.sections?.[activeIndex];

  return (
    <div className="ml-72 p-6 mt-[8%]">
      <h2 className="text-3xl font-bold capitalize mb-6">{topic}</h2>
      {section ? (
        <SectionRenderer section={section} index={activeIndex} />
      ) : (
        <p className="text-base">No content available</p>
      )}
    </div>
  );
}
