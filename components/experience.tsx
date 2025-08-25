import { cn } from "@/lib/utils"

const experiences = [
  {
    title: "Mentor",
    company: "GirlScript Summer of Code (GSSoC)",
    location: "Remote, India",
    date: "July 2025 - Present",
    responsibilities: [
      "Mentored participants in the GSSoC program.",
      "Provided guidance on open-source contributions and software development best practices.",
      "Reviewed code and helped resolve technical challenges."
    ]
  },
  {
    title: "Open Source Contributor",
    company: "Open Source Connect",
    location: "Remote",
    date: "July 2025 - Present",
    responsibilities: [
      "Actively contributed to various open-source projects.",
      "Submitted code, resolved issues, and participated in community discussions.",
      "Gained hands-on experience with collaborative development workflows using Git and GitHub."
    ]
  },
  {
    title: "SSOC Contributor (Season 4)",
    company: "Social Summer of Code (SSOC)",
    location: "Remote",
    date: "June 2025 - Present",
    responsibilities: [
      "Contributed to open-source projects as part of the SSOC program.",
      "Collaborated with project maintainers to implement new features and fix bugs.",
      "Enhanced skills in collaborative coding and software development."
    ]
  },
  {
    title: "Campus Ambassador",
    company: "International Model United Nations Association (IMUNA)",
    location: "India",
    date: "September 2024 - Present",
    responsibilities: [
      "Represented the organization and its initiatives.",
      "Promoted events and engaged with student communities.",
      "Developed leadership and networking skills."
    ]
  },
  {
    title: "Campus Ambassador for Cognizance 2025",
    company: "Indian Institute of Technology, Roorkee",
    location: "Remote",
    date: "March 2025, 1 month",
    responsibilities: [
      "Promoted the technical festival and encouraged student participation.",
      "Served as a point of contact between the organizing committee and the student community.",
      "Strengthened communication and marketing skills."
    ]
  },
  {
    title: "Campus Ambassador Program, Kaizen 2025",
    company: "Indian Institute of Technology, Delhi",
    location: "Remote",
    date: "January 2025 - February 2025",
    responsibilities: [
      "Promoted college events and workshops within the campus network.",
      "Engaged with students to build community interest in tech-related activities.",
      "Improved communication and networking skills."
    ]
  },
  {
    title: "Campus Ambassador",
    company: "Wayspire",
    location: "Remote",
    date: "December 2024 - January 2025",
    responsibilities: [
      "Served as a representative for the platform.",
      "Promoted courses and services to a wider audience.",
      "Enhanced skills in outreach and community building."
    ]
  },
  {
    title: "Campus Ambassador",
    company: "Indian Institute of Technology, Madras",
    location: "Remote",
    date: "October 2024 - January 2025",
    responsibilities: [
      "Coordinated promotional activities and student outreach programs.",
      "Served as a representative for college initiatives.",
      "Strengthened leadership and organizational skills."
    ]
  },
  {
    title: "GSSOC 2024 Contributor",
    company: "GirlScript Summer of Code",
    location: "Remote",
    date: "October 2024 - November 2024",
    responsibilities: [
      "Actively contributed to open-source projects.",
      "Collaborated on code and project documentation.",
      "Gained experience in a large-scale open-source program."
    ]
  },
  {
    title: "Campus Ambassador",
    company: "Lets Upgrad",
    location: "Remote",
    date: "July 2024 - August 2024",
    responsibilities: [
      "Promoted educational content and courses to students.",
      "Organized workshops and promotional events.",
      "Strengthened leadership and public speaking abilities."
    ]
  }
]

const NeomorphicCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={cn(
        "bg-[#ecebe4] rounded-xl p-6",
        "shadow-[9px_9px_18px_#c9c2c8,-9px_-9px_18px_#ffffff]",
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

export default function Experience() {
  return (
      <section id="experience" className="py-20 px-6 bg-[#ecebe4]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1c1c1c]">Experience</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {experiences.map((experience) => (
                <NeomorphicCard key={experience.title}>
                  <h3 className="text-xl font-bold mb-2 text-[#1c1c1c]">{experience.title}</h3>
                  <p className="text-[#1c1c1c]/80 font-semibold">{experience.company}</p>
                  <p className="text-[#1c1c1c]/60 mb-4">{experience.location}</p>
                  {experience.date && (
                      <p className="text-[#1c1c1c]/60 mb-4">{experience.date}</p>
                  )}
                  {experience.responsibilities.map((responsibility, index) => (
                      <NeomorphicItem key={index}>
                        <span className="text-[#1c1c1c]/80">{responsibility}</span>
                      </NeomorphicItem>
                  ))}
                </NeomorphicCard>
            ))}
          </div>
        </div>
      </section>
  )
}