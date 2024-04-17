import { LucideIcon } from "lucide-react";

export type ExperienceProps = {
    Logo: LucideIcon;
    title: string;
    date: string;
};


export const Experience = (props: ExperienceProps) => {
    return (
        <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo/>
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <div>
                    <p className="text-sm text-muted-foreground">
                        {props.date}
                    </p>
                </div>
            </div>
        </div>
    );
};
