"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>SQL</li>
        <li>R</li>
        <li>Javascript</li>
        <li>HTML/CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Pandas</li>
        <li>NumPy</li>
        <li>Flask</li>
        <li>Django</li>
        <li>NodeJS</li>
        <li>React</li>
        
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Data Analytics</li>
        <li>Google Professional Project Manager</li>
        <li>SalesForce Administrator</li>
      </ul>
    ),
  },
    {
    title: "Systems Administered",
    id: "systems",
    content: (
      <ul className="list-disc pl-2">
        <li>Quickbooks</li>
        <li>BlackBaud Financial</li>
        <li>SalesForce Cloud</li>
        <li>SAP</li>
        <li>MySQL</li>
        <li>Asana</li>
        <li>Multiple Marketing based systems</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/profile.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Joey Rocha is a seasoned data professional with a strong focus on leveraging technology to drive data-driven solutions. With expertise in programming languages, systems analysis, data visualization, and SQL, Joey excels in transforming complex data into actionable insights. Proficient in a wide range of tools, including SQL, Python, Tableau, Salesforce, and web development technologies, Joey effectively bridges technical capabilities with business objectives. Currently pursuing a Master’s in Business Analytics at CSU Sacramento, Joey is deepening their knowledge of advanced analytics, statistical modeling, and machine learning to solve complex business challenges. Holding a Bachelor of Science in Management in IT from Cal State East Bay and certifications in Google Data Analytics, Tableau, Project Management, and Salesforce Administration, Joey is well-equipped to lead data initiatives, optimize workflows, and deliver measurable organizational impact in any environment.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Libraries{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("systems")}
              active={tab === "systems"}
            >
              {" "}
              Systems{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
