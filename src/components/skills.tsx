import { Badge } from "@/components/ui/badge";
import { Section } from "./section";
import { CIcon } from "./icons/C_icon";
import { ReactIcon } from "./icons/React_icon";
import { GolangIcon } from "./icons/Golang";
import { Code } from "./code"

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Skills</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Currently Enjoying ...
            </h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-2 mb-4 flex-1">
                    <ReactIcon size={42} className="animate-spin"
                        style={{
                            animationDuration: "10s",
                        }}
                    />
                    <h3 className="mb-2 font-semibold tracking-tight">React</h3>
                    <p className="text-sm text-muted-foreground">I've been using React for <Code>Software Developement</Code> & <Code>Frontend</Code> on multiple site</p>
                </div>
                <div className="flex flex-col gap-2 mb-4 flex-1">
                    <CIcon size={42}/>
                    <h3 className="mb-2 font-semibold tracking-tight">C</h3>
                    <p className="text-sm text-muted-foreground">C is my main <Code>language</Code>, which I've been learning for over one year </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <GolangIcon size={30}/>
                    <h3 className="mb-2 font-semibold tracking-tight">Golang</h3>
                    <p className="text-sm text-muted-foreground">I used go to create a <Code>RestFul API</Code> & some small project with it</p>
                </div>
            </div>
        </Section>
    );
};
