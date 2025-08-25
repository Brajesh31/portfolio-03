import { cn } from "@/lib/utils"

const certifications = [
  "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
  "Oracle Fusion AI Agent Studio Foundations Associate - Rel 1",
  "Engineer Data for Predictive Modeling with BigQuery ML Skill Badge (Google Cloud)",
  "Explore Generative AI with the Vertex AI Gemini API Skill Badge (Google Cloud)",
  "Foundational C# with Microsoft Developer Certification (freeCodeCamp & Microsoft)",
  "Python Essentials 1 (Cisco)",
  "Python for Data Science (IBM)",
  "CS105: Introduction to Python (Saylor Academy)",
  "CS107: C++ Programming (Saylor Academy)",
  "CS401: Operating Systems (Saylor Academy)",
  "CS403: Introduction to Modern Database Systems (Saylor Academy)",
  "SQL (Intermediate) (HackerRank)",
  "Data Science Foundations - Level 1 (IBM)",
  "Data Analytics Essentials (Cisco)",
  "Introduction to Modern AI (Cisco)",
  "Metasploit from Scratch: Beginner to Professional (Udemy)",
  "Goldman Sachs Software Engineering Job Simulation (Forage)",
  "AWS Solutions Architecture Job Simulation (Forage)"
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

export default function Education() {
  return (
      <section id="education" className="py-20 px-6 bg-[#ecebe4]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1c1c1c]">Education & Certifications</h2>

          <NeomorphicCard className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#1c1c1c]">GL Bajaj Group of Institutions, Mathura, Uttar Pradesh</h3>
            <p className="text-[#1c1c1c] font-semibold mb-2">Student</p>
            <p className="text-[#1c1c1c]/80 font-medium mb-2">Relevant Coursework:</p>
            {["Computer Information Systems", "Statistical Data Analysis", "Artificial Intelligence (AI)", "Project Management"].map((course, index) => (
                <NeomorphicItem key={index}>
                  <span className="text-[#1c1c1c]/80">{course}</span>
                </NeomorphicItem>
            ))}
          </NeomorphicCard>

          <NeomorphicCard>
            <h3 className="text-2xl font-bold mb-4 text-[#1c1c1c]">Certifications</h3>
            {certifications.map((certification, index) => (
                <NeomorphicItem key={index}>
                  <span className="text-[#1c1c1c]/80">{certification}</span>
                </NeomorphicItem>
            ))}
          </NeomorphicCard>
        </div>
      </section>
  )
}