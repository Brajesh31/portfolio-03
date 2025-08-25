import { cn } from "@/lib/utils"

const projects = [
  {
    title: "ChatterBox - Real-Time Chat App",
    description: "A real-time messaging application with group chats and file sharing, developed using the **MERN stack** (MongoDB, Express.js, React, Node.js) to showcase full-stack development expertise."
  },
  {
    title: "proshop-mern",
    description: "An e-commerce platform built with the **MERN stack**, featuring product listings, user authentication, and a complete order management system. This project is a direct demonstration of MERN stack development expertise."
  },
  {
    title: "Inventory Management System",
    description: "An advanced inventory system to streamline stock and orders. This project highlights the development of robust backend systems and a functional user interface."
  },
  {
    title: "Ella – Personal AI Assistant",
    description: "A smart command-line Python-based personal assistant for everyday digital tasks, demonstrating skills in **AI**, Python scripting, and system automation."
  },
  {
    title: "AI-Powered Resume Evaluator",
    description: "An AI-powered tool for automated resume screening and evaluation using **machine learning**, which showcases a practical application of AI in a professional setting."
  },
  {
    title: "AgroTech - Smart Farming Platform",
    description: "An **IoT-based** smart farming solution with crop monitoring, weather prediction, and automated irrigation. This project highlights my abilities in **Python**, IoT, and designing a complex **system architecture**."
  },
  {
    title: "Voice Bot + Calendar Sync Prototype",
    description: "An advanced prototype integrating voice bots with calendar sync capabilities, demonstrating skills in **API integration** and developing innovative, user-centric solutions."
  },
  {
    title: "Career Mapper",
    description: "An application to compare jobs based on multiple lifestyle indices, showcasing skills in **data visualization** and creating a practical, data-driven web application."
  }
]

const NeomorphicCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={cn(
        "bg-[#ecebe4] rounded-xl p-6",
        "shadow-[9px_9px_18px_#c9c8c2,-9px_-9px_18px_#ffffff]",
        "hover:shadow-[inset_9px_9px_18px_#c9c8c2,inset_-9px_-9px_18px_#ffffff]",
        "transition-all duration-300",
        className
    )}>
      {children}
    </div>
)

export default function Projects() {
  return (
      <section id="projects" className="py-20 px-6 bg-[#ecebe4]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1c1c1c]">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
                <NeomorphicCard key={project.title}>
                  <h3 className="text-xl font-bold mb-4 text-[#1c1c1c]">{project.title}</h3>
                  <p className="text-[#1c1c1c]/80 mb-4">{project.description}</p>
                </NeomorphicCard>
            ))}
          </div>
        </div>
      </section>
  )
}