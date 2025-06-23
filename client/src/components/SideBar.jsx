export default function Sidebar({ sections, currentTopic, setActiveIndex, activeIndex }) {
  return (
    <aside className="fixed left-0 top-[8%] bottom-0 w-64 p-6 overflow-y-auto h-[80%]">
      <h2 className="text-2xl font-bold capitalize mb-6">{currentTopic}</h2>
      <ul className="space-y-3">
        {sections?.map((section, index) => (
          <li key={index}>
            <button
              onClick={() => setActiveIndex(index)}
              className={`text-sm text-left w-full hover:underline focus:outline-none ${
                activeIndex === index ? "font-semibold" : ""
              }`}
            >
              {index + 1}. {section.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
