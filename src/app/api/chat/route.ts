import { NextResponse } from "next/server";

const PORTFOLIO_CONTEXT = `
Name: Renuka Gore
Role: Software Engineer / Full-Stack Developer
Location: Pune, Maharashtra, India
Tech Stack: React, Next.js, Java, TypeScript, Tailwind CSS, MySQL, MongoDB, Node.js
Interests: Web development, algorithmic optimization, digital photography.
Status: Open for Software Engineering roles and projects.
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const query = message.toLowerCase();

    let reply = "I'm Renuka's AI assistant. Feel free to ask about her skills, experience, projects, or how to contact her!";

    if (query.includes("skill") || query.includes("tech") || query.includes("stack")) {
      reply = "Renuka specializes in React,  Java,  CSS, Node.js, MySQL, and MongoDB.";
    } else if (query.includes("education")) {
      reply = "Renuka has complete her Bachelors in Smt Kashibai Navle College of Engineering in Computer Science with 9.23 CGPA";
    }else if (query.includes("experience") || query.includes("education") || query.includes("about")) {
      reply = "Renuka is a Software Engineer based in Pune with expertise in full-stack development, modern UI framework design, and Java performance optimization.";
    } else if (query.includes("contact") || query.includes("email") || query.includes("hire")) {
      reply = "You can reach Renuka directly via email at renuka@example.com or submit a message through the contact form at the bottom of the page!";
    } else if (query.includes("project")) {
      reply = "Renuka has built several modern web applications featuring Next.js, Tailwind CSS, and full-stack API integrations. Check out the Projects section below!";
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: "Failed to process request." }, { status: 500 });
  }
}