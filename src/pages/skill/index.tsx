import { CardSkills } from "../../components/CardSkills";
import { DiReact, DiNodejsSmall, DiPostgresql, DiMysql, DiMongodb, } from "react-icons/di";

import { SiTypescript, SiJavascript, SiMariadb, SiHtml5, SiCss } from "react-icons/si"
import type { CardSkillsProps } from "../../components/CardSkills";




export default function Skill() {


    const skills: CardSkillsProps[] = [
        { name: "HTML", level: 3, icon: <SiHtml5 /> },
        { name: "CSS", level: 3, icon: <SiCss /> },
        { name: "JavaScript", level: 3, icon: <SiJavascript /> },
        { name: "React", level: 2, icon: <DiReact /> },
        { name: "NodeJS", level: 3, icon: <DiNodejsSmall /> },
        { name: "PostgreSQL", level: 2, icon: <DiPostgresql /> },
        { name: "MySQL", level: 3, icon: <DiMysql /> },
        { name: "MongoDB", level: 2, icon: <DiMongodb /> },
        { name: "TypeScript", level: 2, icon: <SiTypescript /> },
        { name: "MariaDB", level: 3, icon: <SiMariadb /> }
    ];

    return (
        <div id="skills">
            <h2 className="text-5xl font-bold tracking-tight text-[#34d298] mb-10">
                Minhas Skills
            </h2>
            <div
                className="grid grid-cols-4 gap-6 mt-10"
            >
                {skills.map((skill, index) => (
                    <CardSkills key={index} {...skill} />
                ))}
            </div>
        </div>
    );
}