export default function ProjectList({ projects }) {
  return (
    <div className="mb-4">
      {projects.map((project, i) => (
        <div key={i} className="mb-3">
          <h4 className="text-md font-semibold">{project.name}</h4>
          <p className="text-sm">{project.description}</p>
        </div>
      ))}
    </div>
  );
}
