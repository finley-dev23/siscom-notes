"use client";

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Kimani",
      role: "Founder & CEO",
      description: "Sarah is the visionary behind Siscom Africa, deeply rooted in Kenya's technology ecosystem. Before starting Siscom Africa, she served as a Technology Infrastructure Executive at Safaricom, leading a partnerships team of over 50 people across East Africa. She played a key role in developing cloud infrastructure strategies for African enterprises. Outside of her professional achievements, Sarah is also a former TechWomen Fellow (2022).",
      initials: "SK"
    },
    {
      name: "David Ochieng",
      role: "Head of Technology",
      description: "With over 12 years of experience as a Cloud Infrastructure Specialist at Microsoft Azure, David brings deep understanding of scaling technology infrastructure across Africa. He leads Siscom Africa's technology team, ensuring that every infrastructure project meets the highest standards of reliability and performance.",
      initials: "DO"
    },
    {
      name: "Grace Mwangi",
      role: "Head of Operations",
      description: "A seasoned operations leader, Grace has led technical teams at multiple early-stage startups across Africa. Her previous experience includes key roles at Andela and Flutterwave. At Siscom Africa, she heads up the operations team, driving efficiency and building the processes that power the platform.",
      initials: "GM"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Siscom Africa Team</h2>
      <p className="text-base text-gray-600">Everyone helping build Siscom Africa, not limited to employees</p>
      
      <div className="space-y-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="p-4 rounded-lg hover:bg-gray-50 transition">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-base font-medium text-blue-600 mb-3">{member.role}</p>
              <p className="text-base text-gray-700 leading-relaxed">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
