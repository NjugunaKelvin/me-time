import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className=" flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow px-32 items-center justify-center">
        <h1 className="text-4xl font-bold  items-center text-amber-400">Njuguna Kelvin (Vin)</h1>
        <br/> <br/>
        <span className="font-extrabold text-white text-xl" >1.0: About Me</span>
        <p className="py-2 text-xl text-amber-50">
          Full-Stack Developer and AI/ML practitioner focused on delivering scalable, high-quality solutions that solve complex problems.
           Experienced in remote collaboration, I combine technical rigor, strategic thinking, and creative problem-solving to drive measurable 
           impact. Passionate about emerging technologies, I translate AI and software innovations into practical applications while maintaining 
           a strong commitment to performance, efficiency, and user experience.
        </p>
        <br/> <br/>
        <span className="font-extrabold text-white text-xl">1.1: My Stack</span>
        <p className="text-amber-50">
          hello
        </p>
      </div>
    </div>
  );
}