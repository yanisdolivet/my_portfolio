import { Section } from "./section"

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start">
            <div className="flex-1">
                <img
                    src="https://lh3.googleusercontent.com/a/ACg8ocKPfuyW6fx4Q3YVZCXyQCYnTcmj9H1YgjW9yfRsu_ZMW3BttnXQpRbbITVfhrtOzRHmFAeR7E0O_dIb_P8C51EAbmvPWRJQ=s288-c-no"
                    className="w-full h-auto max-m-xs"
                    alt="yanis' picture"
                />
            </div>
            <div className="flex-[2]">
                <h2 className="text-5xl">Yanis Dolivet</h2>
                <h3>Junior Developer</h3>
                <p>
                    Hi! My name is Yanis, I come from France and I'm currently in first year
                    in Epitech Lyon. I study Computer Science as a Junior Developer and I'm looking
                    for an internship for my second year that could help me develop the passion about learning & coding.
                    I'm always in search of new challenges to overcome that will allow me to reach my goals.
                </p>
            </div>
        </Section>
    )
}