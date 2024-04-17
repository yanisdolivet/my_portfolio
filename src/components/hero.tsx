import { Section } from "./section";
import { EpitechLogo } from "./icons/Epitech_logo";
import { InternshipIcon } from "./icons/Intership_icon";
import { Code } from "./code"

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[2] max-md:m-auto mr-auto mt-auto">
                <img
                    src="https://lh3.googleusercontent.com/a/ACg8ocKPfuyW6fx4Q3YVZCXyQCYnTcmj9H1YgjW9yfRsu_ZMW3BttnXQpRbbITVfhrtOzRHmFAeR7E0O_dIb_P8C51EAbmvPWRJQ=s288-c-no"
                    className="w-full h-auto max-w-xs max-md:w-56"
                    alt="yanis' picture"
                />
            </div>
            <div className="flex-[3] pl-7 flex flex-col gap-2">
                <h2 className="text-5xl text-primary font-bold">Yanis Dolivet</h2>
                <h3 className="text-3xl pb-4">Junior Developer</h3>
                <p className="text-base">
                    Hi! My name is Yanis, I come from France and I'm currently in first year
                    in <Code className="items-center gap-1">
                            <EpitechLogo size={20} className="inline"/> Epitech
                        </Code> Lyon. I study Computer Science as a Junior Developer and I'm looking
                    for an <Code className="items-center gap-1">
                            <InternshipIcon size={20} className="inline"/> Internship
                        </Code> for my second year that could help me develop the passion about learning & coding.
                    I'm always in search of new challenges to overcome that will allow me to reach my goals.
                </p>
            </div>
        </Section>
    )
}