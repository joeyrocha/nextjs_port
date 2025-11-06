"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Built a personal portfolio website using React and Next.js to showcase my projects and skills. Implemented responsive design principles to ensure optimal viewing across devices, and integrated animations for enhanced user experience.",
    image: "/images/projects/Portfolio.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/joeyrocha/nextjs_port",
    previewUrl: "jrochaperez.com",
  },
  {
    id: 2,
    title: "CourseraDataEngineerCapstone",
    description: "Completed the IBM Data Engineering Capstone Project on Coursera, designing and implementing an end-to-end data pipeline—including data ingestion, warehousing, ETL processing, and analytics dashboarding—using SQL, Python",
    image: "/images/projects/database_pic.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/joeyrocha/courseraDataEngineerCapstone",
    previewUrl: "https://coursera.org/share/d34c3d8f9c902420e1820011f2686dc3",
  },
  {
    id: 3,
    title: "Analytics Engineering with Airbnb",
    description: "Simulated the role of an Analytics Engineer at Airbnb by building an end-to-end data pipeline using Snowflake, dbt, and Preset. Cleaned, transformed, and tested real Airbnb Berlin data, implemented data quality checks, managed model dependencies, and delivered a BI dashboard with clear documentation and automation.",
    image: "/images/projects/DBT.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/joeyrocha/DBT_Project_AIRBNB_DW",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
       
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
