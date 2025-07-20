import CodeBlock from "./partial/CodeBlock";
import FeatureList from './partial/FeatureList'    
import FrameworkList from './partial/FrameworkList'
import ProjectList from './partial/ProjectList'
import TopicItem from "./partial/TopicItems";

export default function SectionRenderer({ section, index }) {
  return (
    <div id={`section-${index}`} className="mb-8 scroll-mt-24">
      <h3 className="text-xl font-semibold mb-2">{section.title}</h3>

      {section.description && <p className="text-base mb-4">{section.description}</p>}
      {section.features && <FeatureList features={section.features} />}
      {section.image && (
        <img
          src={section.image}
          alt={section.title}
          className="mt-4 rounded-md w-full max-w-md"
        />
      )}
      {section.code && <CodeBlock code={section.code} />}

      {section.topics?.map((topic, i) => (
        <TopicItem key={i} topic={topic} />
      ))}

      {section.frameworks && <FrameworkList frameworks={section.frameworks} />}
      {section.projects && <ProjectList projects={section.projects} />}
    </div>
  );
}
