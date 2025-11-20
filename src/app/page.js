import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className=" flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow px-32 items-center justify-center">
        <h1 className="text-4xl font-bold  items-center text-amber-400">Njuguna Kelvin</h1>
        <p className="py-2 text-xl">I am a Junior Full-Stack Developer and AI/ML enthusiast based in Kenya. I enjoy building clean, efficient, and impactful solutions that solve real-world challenges while delivering great user experiences.

I excel in remote work environments, maintaining clear communication, meeting deadlines, and consistently delivering results. I have a strong curiosity for technology and a drive to stay ahead in the ever-evolving landscape of software development.

Beyond coding, I’m deeply fascinated by artificial intelligence and machine learning, constantly exploring ways they can be applied to everyday problems. I’m also a passionate chess player — a game I value for its strategy, patience, and mental discipline, qualities I bring into my work.

When I’m not in front of a screen, I enjoy reading about emerging technologies, experimenting with side projects, and engaging in activities that challenge my creativity and problem-solving skills.</p>
      </div>
    </div>
  );
}