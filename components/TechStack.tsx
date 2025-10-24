import { FC } from 'react';
import { IconType } from 'react-icons';
import { FaJava, FaPython, FaReact, FaDocker } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { SiC, SiNextdotjs, SiKubernetes, SiMicrosoftazure, SiAngular, SiSpringboot, SiTypescript, SiJavascript, SiCsharp, SiDotnet, SiMongodb, SiMysql, SiGraphql, SiFlask, SiSelenium, SiCucumber, SiPostman, SiAwsamplify, SiFirebase, SiGooglecloud, SiPostgresql } from 'react-icons/si';
interface TechStackItem {
    name: string;
    icon: IconType;
}

const techStacks: Record<string, TechStackItem[]> = {
    languages: [
        { name: 'Java', icon: FaJava },
        { name: 'Javascript', icon: SiJavascript },
        { name: 'Python', icon: FaPython },
        { name: 'Go', icon: FaGolang },
        { name: 'C', icon: SiC },
        { name: 'C#', icon: SiCsharp },
        
    ],
    frameworks: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'React', icon: FaReact },
        { name: 'Angular', icon: SiAngular },
        { name: '.NET Framework', icon: SiDotnet },
        { name: 'Spring Boot', icon: SiSpringboot },
        { name: 'Flask', icon: SiFlask},
        { name: 'Selenium', icon: SiSelenium },
    ],
    tools: [
        { name: 'Postman', icon: SiPostman },
        { name: 'Docker', icon: FaDocker },
        { name: "Cucumber", icon: SiCucumber},
    ],
    databases: [
        { name: "Postgre SQL", icon: SiPostgresql},
        { name: 'Mongo DB', icon: SiMongodb },
        { name: 'MySQL', icon: SiMysql },
        { name: 'AWS S3', icon: SiAwsamplify },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'GCP', icon: SiGooglecloud },
        { name: 'Azure', icon: SiMicrosoftazure },
        { name: 'Kubernetes', icon: SiKubernetes }
        

    ],
};

const renderCategory = (title: string, items: TechStackItem[]): JSX.Element => (
    <div key={title} className="mb-8">
        <p className="md:text-xl text-base font-bold mb-4">{title}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map(({ name, icon: Icon }) => (
                <div key={name} className="flex items-center gap-2 md:text-base text-sm">
                    <Icon size={24} />
                    <span>{name}</span>
                </div>
            ))}
        </div>
    </div>
);

const TechStack: FC = () => (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
            {renderCategory('Languages', techStacks.languages)}
            {renderCategory('Tools', techStacks.tools)}
        </div>
        <div className="space-y-8">
            {renderCategory('Frameworks', techStacks.frameworks)}
            {renderCategory('Databases & storage', techStacks.databases)}
        </div>
    </div>
);

export default TechStack;
