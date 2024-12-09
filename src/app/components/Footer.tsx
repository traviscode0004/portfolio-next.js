export default function Footer() {
  return (
    <footer className="grid grid-cols-4 gap-6  text-white py-10 px-8">
      {/* Card 1 */}
      <div className="bg-black p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-teal-200">AI Resume Tools</h3>
        <p className="text-sm text-gray-300 mt-2">
          Build smarter resumes using AI to stand out.
        </p>
      </div>
      {/* Card 2 */}
      <div className="bg-black p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-teal-200">Featured Projects</h3>
        <p className="text-sm text-gray-300 mt-2">
          Discover top-tier projects showcasing my expertise.
        </p>
      </div>
      {/* Card 3 */}
      <div className="bg-black p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-teal-200">About Me</h3>
        <p className="text-sm text-gray-300 mt-2">
          Learn about my journey and approach to development.
        </p>
      </div>
      {/* Card 4 */}
      <div className="bg-black p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-teal-200">Contact</h3>
        <p className="text-sm text-gray-300 mt-2">
          Let’s collaborate and bring your ideas to life.
        </p>
      </div>
    </footer>
  );
}

