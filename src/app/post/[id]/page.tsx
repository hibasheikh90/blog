"use client";
import React from "react";
import Image from "next/image";
import Cmt from "../../../components/cmt";

const posts = [
  {
    id: "1",
    title: "Exploring the World of Artificial Intelligence",
    description:
      "Artificial Intelligence (AI) is transforming the way we live, work, and interact with technology. From powering virtual assistants like Siri and Alexa to enabling self-driving cars and personalized recommendations on platforms like Netflix, AI has integrated seamlessly into our daily lives. At its core, AI involves machines mimicking human intelligence to perform tasks such as learning, problem-solving, and decision-making. It uses techniques like machine learning, where systems improve through experience, and natural language processing, which helps computers understand and generate human language.\n\nThe potential of AI is immense. In healthcare, AI assists in diagnosing diseases with accuracy and developing new drugs. In business, it streamlines operations, analyzes data, and enhances customer experiences. Education, agriculture, and even creative fields like art and music are being revolutionized by AI-driven tools.",
    image: "/1.jpg",
  },
  {
    id: "2",
    title: "Agentic AI: Redefining Intelligent Autonomy",
    description:
      "In the evolving landscape of artificial intelligence, Agentic AI represents a pivotal shift. Unlike traditional systems designed to perform specific tasks, Agentic AI is characterized by its ability to make autonomous decisions while aligning with high-level goals.\n\nThis type of AI behaves like an agent — one that can perceive its environment, adapt to changes, and take actions independently to achieve predefined objectives. The most compelling feature? Its capacity to operate in dynamic and unpredictable scenarios, making it indispensable in fields like robotics, autonomous vehicles, and personalized assistants.\n\nFor instance, imagine a personal AI that not only schedules your day but also anticipates your needs, reschedules conflicting appointments, and adapts based on your evolving preferences. This is the promise of Agentic AI – a future where machines not only assist but intelligently collaborate with humans.",
    image: "/2.jpg",
  },
  {
    id: "3",
    title: "Personalized Learning with AI",
    description:
      "Artificial Intelligence (AI) is revolutionizing education by offering personalized learning experiences for students. Traditional classrooms often struggle to meet the unique needs of every learner, but AI changes this by tailoring lessons and resources to individual students.AI-powered tools can analyze a student’s strengths and weaknesses, adapting content to their learning pace. For example, if a student finds math difficult, AI programs can provide extra practice and explain concepts step by step. Similarly, advanced learners can explore challenging topics without waiting for the rest of the class to catch up.AI also enables interactive learning through virtual tutors and educational apps. These tools provide instant feedback, making it easier for students to correct mistakes and improve quickly. Teachers benefit, too, as AI reduces their workload by automating tasks like grading and creating custom lesson plans.While AI in education offers many advantages, it’s important to balance technology with human interaction. Teachers play a crucial role in inspiring and guiding students, which AI cannot replace.Personalized learning with AI makes education more engaging and effective, helping students of all levels succeed. As technology advances, AI will continue to shape the future of learning in exciting ways.",
    image: "/3.webp",
  },
  {
    id: "4",
    title: "Health AI: Transforming Healthcare",
    description:
      "Artificial Intelligence (AI) is bringing a revolution to healthcare, making it smarter and more efficient. With its ability to analyze large amounts of data quickly, AI helps doctors make better decisions, improving patient care and saving lives.AI is used in disease detection and diagnosis. For example, AI-powered tools can analyze X-rays, CT scans, and other medical images to detect issues like cancer or heart problems early. This means patients can get treated faster and more effectively.Virtual health assistants powered by AI are also becoming popular. They help patients by answering questions, reminding them to take medicines, or even scheduling doctor appointments. AI is also playing a big role in drug development, speeding up the process of finding new treatments for diseases.For hospitals, AI helps manage patient records, reduce errors, and improve efficiency. It can predict patient needs, ensuring resources like beds and medicines are available when needed.While AI is transforming healthcare, it’s not without challenges. Privacy, data security, and the need for human oversight are important factors. AI works best as a tool to support doctors and nurses, not replace them.",
    image: "/4.jpg",
  },
  {
    id: "5",
    title: "AI in Everyday Life: Making Things Easier",
    description:
      "Artificial Intelligence (AI) has become an important part of our daily lives, helping us in ways we might not even notice. From smartphones to online shopping, AI is everywhere, making things faster and more convenient.Think about your phone’s voice assistant like Siri or Alexa. They can set reminders, answer questions, and even play music—all thanks to AI. When you shop online, AI suggests products based on your preferences, helping you find what you need quickly.AI also makes driving safer with smart features like automatic braking and lane detection in modern cars. Streaming platforms like Netflix and Spotify use AI to recommend shows or songs you’ll love.Even in healthcare, AI plays a role. It helps doctors diagnose diseases faster and ensures patients get the right treatment. AI also powers fitness apps that track your health and offer personalized workout plans.Though we may not see it, AI simplifies our tasks, saves time, and improves experiences. As technology grows, AI will continue to make our lives easier and more efficient.Embracing AI means embracing a smarter, more connected world. It’s not just for experts—it’s for everyone!",
    image: "/5.jpg",
  },
  {
    id: "6",
    title: "The Rise of AI: Shaping Our Future",
    description:
      "Artificial Intelligence (AI) is changing the world around us. From daily tasks to major industries, AI is helping people work smarter and live better. But what exactly does this mean for our future?AI is already transforming how we communicate, travel, and learn. Apps like Google Translate break language barriers, while navigation tools like Google Maps help us find the fastest routes. In schools, AI-powered tools personalize learning, making it easier for students to succeed.In business, AI helps companies work faster and smarter. It predicts trends, improves customer service, and even automates repetitive tasks. Factories use AI to create products with amazing precision, saving time and reducing waste.Looking ahead, AI could solve big challenges like climate change, by analyzing data to create eco-friendly solutions. In healthcare, it may find cures for diseases or improve how surgeries are done.While AI offers exciting possibilities, it’s also important to use it responsibly. This means making sure it benefits everyone and doesn’t harm people or jobs.The rise of AI is a journey of innovation and growth. By embracing it wisely, we can shape a better future for all.",
    image: "/6.jpg",
  },
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">Post Not Found</h2>
        <a
          href="/"
          className="mt-4 inline-block px-6 py-2 text-white bg-blue-950 rounded-md hover:bg-blue-800"
        >
          Back to Home
        </a>
      </div>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((paragraph, index) => (
      <p key={index} className="mb-4 text-justify">
        {paragraph.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        {post.title}
      </h1>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-auto rounded-md mt-4 shadow-md hover:shadow-lg transition-shadow duration-300"
        />
      )}
      <div className="mt-6 text-lg leading-relaxed text-Blue-950">
        {renderParagraphs(post.description)}
      </div>
      <div className="mt-8">
        <Cmt />
      </div>
    </div>
  );
}
