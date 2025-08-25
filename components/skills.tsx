import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    title: "Technical Skills",
    skills: ["Full-Stack Development", "MERN Stack", "Python", "JavaScript", "TypeScript", "C++", "Java", "SQL", "Git", "System Design", "Agile Methodologies"]
  },
  {
    title: "Cloud Services & Platforms",
    skills: ["Google Cloud", "Microsoft Azure", "AWS", "Cloud Computing", "Infrastructure Management"]
  },
  {
    title: "Frontend Development",
    skills: ["HTML/CSS", "React", "Vue", "Next.js", "Responsive Design", "API Integration"]
  },
  {
    title: "Software & Quality Engineering",
    skills: ["Software Architecture", "End-to-End Testing", "Performance Optimization", "Problem Solving", "Attention to Detail"]
  },
  {
    title: "AI & Data Science",
    skills: ["Artificial Intelligence (AI)", "Machine Learning", "Statistical Data Analysis", "Natural Language Processing (NLP)", "Prompt Engineering"]
  },
  {
    title: "Collaboration & Professional Skills",
    skills: ["Project Management", "Open-Source Contributions", "Technical Information Sharing", "Talent Development", "Mentoring"]
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

const NeomorphicItem = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#ecebe4] rounded-lg p-3 my-2
                  shadow-[3px_3px_6px_#c9c8c2,-3px_-3px_6px_#ffffff]
                  hover:shadow-[inset_3px_3px_6px_#c9c8c2,inset_-3px_-3px_6px_#ffffff]
                  transition-all duration-300">
      {children}
    </div>
)

export default function Skills() {
  return (
      <section id="skills" className="py-20 px-6 bg-[#ecebe4]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1c1c1c]">Skills</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
                <NeomorphicCard key={category.title}>
                  <h3 className="text-2xl font-bold mb-4 text-[#1c1c1c]">{category.title}</h3>
                  {category.skills.map((skill) => (
                      <NeomorphicItem key={skill}>
                        <span className="text-[#1c1c1c]/80">{skill}</span>
                      </NeomorphicItem>
                  ))}
                </NeomorphicCard>
            ))}
          </div>
        </div>
      </section>
  )
}