import React from 'react';

type SkillLevel = 0 | 1 | 2 | 3 | 4 | 5;

export type CardSkillsProps = {
    name: string;
    level: SkillLevel;
    icon?: React.ReactNode;
    desc?: string;
}

export function CardSkills({ name, level, icon, desc }: CardSkillsProps) {
    return (
        <div className="flex flex-col items-center gap-4 border border-desc rounded-lg p-4">
            <div className='flex justify-start items-center gap-4 w-full'>
                {icon ? <div className="text-4xl">{icon}</div> : null}
                <h3 className="text-lg font-semibold">{name}</h3>
                <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full ${index < level ? 'bg-green-500' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>

            </div>

            {desc && <p className="text-sm text-gray-400 text-center">{desc}</p>}
        </div>
    )
}