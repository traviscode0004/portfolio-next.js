export default function FeaturedProjects() {
    const projects = [
      { title: "RampExplorer", description: "AI-powered map tool for anglers." },
      { title: "AI Resume", description: "Generate custom resumes." },
    ];
  
    return (
      <section className="p-10 text-black">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 bg-black text-white rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  