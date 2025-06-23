export default function TopicContent({ topic, content, activeIndex }) {
  return (
    <div className="ml-72 p-6 mt-[8%]">
      <h2 className="text-3xl font-bold capitalize mb-6">{topic}</h2>

      {content?.sections?.[activeIndex] && (
        <div id={`section-${activeIndex}`} className="mb-8 scroll-mt-24">
          <h3 className="text-xl font-semibold mb-2">{content.sections[activeIndex].title}</h3>

          {content.sections[activeIndex].description && (
            <p className="text-base mb-4">{content.sections[activeIndex].description}</p>
          )}

          {content.sections[activeIndex].features && (
            <ul className="list-disc list-inside mb-4">
              {content.sections[activeIndex].features.map((feature, idx) => (
                <li key={idx} className="text-sm">{feature}</li>
              ))}
            </ul>
          )}

          {content.sections[activeIndex].topics?.map((topicItem, idx) => (
            <div key={idx} className="mb-6">
              <h4 className="text-md font-medium">{topicItem.name}</h4>
              <pre className="mt-2 bg-gray-300 p-4 rounded-md overflow-x-auto text-sm">
                <code>{topicItem.code}</code>
              </pre>
            </div>
          ))}

          {content.sections[activeIndex].frameworks?.map((fw, idx) => (
            <p key={idx} className="text-sm mb-2">- {fw}</p>
          ))}

          {content.sections[activeIndex].projects?.map((project, idx) => (
            <div key={idx} className="mb-4">
              <h4 className="text-md font-semibold">{project.name}</h4>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}

          {content.sections[activeIndex].image && (
            <img
              src={content.sections[activeIndex].image}
              alt={content.sections[activeIndex].title}
              className="mt-4 rounded-md w-full max-w-md"
            />
          )}

          {content.sections[activeIndex].code && (
            <pre className="mt-4 bg-gray-300 p-4 rounded-md overflow-x-auto text-sm">
              <code>{content.sections[activeIndex].code}</code>
            </pre>
          )}
        </div>
      )}
    </div>
  );
}
