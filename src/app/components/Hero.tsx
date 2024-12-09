import FeaturedCard from "./FeaturedCard";

export default function MainSection() {
  return (
    <main className="grid grid-cols-3 gap-6 bg-gradient-to-r from-black via-teal-500 to-black text-white py-10 px-8">
      {/* Column 1 */}
      <div className="space-y-4">
        <FeaturedCard 
          title="Full-Stack Developer" 
          description="Explore how I bring backend and frontend together seamlessly." 
        />
        <FeaturedCard 
          title="AI Tools" 
          description="Leverage cutting-edge AI technology to optimize workflows." 
        />
      </div>

      {/* Column 2 */}
      <div className="space-y-4">
        <FeaturedCard 
          title="Hero Section" 
          description="Captivating designs and animations to grab attention." 
        />
      </div>

      {/* Column 3 */}
      <div className="space-y-4">
        <FeaturedCard 
          title="AI Project Recommendation Tool" 
          description="Get personalized project suggestions powered by AI." 
        />
        <FeaturedCard 
          title="More Tools" 
          description="Explore additional tools designed to empower developers." 
        />
      </div>
    </main>
  );
}
