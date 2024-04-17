import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react";
import { Section } from "./section";
import { Badge } from "./ui/badge";
import Link from "next/link";

export const ContactMe = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Contact Me</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">You can contact me at ...</h2>
            <div className="flex max-md:flex-col  w-full gap-4">
                <ContactCard
                    url="https://www.linkedin.com/in/yanis-dolivet-1850702a4/"
                    image="https://media.licdn.com/dms/image/D5603AQEHiJCLqY7aYw/profile-displayphoto-shrink_100_100/0/1713278204767?e=1718841600&v=beta&t=BfIx2zmGWbXGg58uHwOgsZu2abE-ednlbcuIOEIYzyk"
                    name="Yanis Dolivet"
                    mediumImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUKZsL///8AYsFqk9JFfsoAXsCQrdsAV74AZMH3+fwAXb8AYMAAWb4AW78gbMQSacMqcMUAVb3m7vjI2O6guOCatuDc5vQ6e8nT4PG6zuqvxeaBpdmFpdjz9/x1ntZhkNExdsimv+TD1OxUic5JhM20yOfY4/Ps8vmTsd5/X6OuAAAED0lEQVR4nO2d63aqMBBGGxSJCXgD9SheoNbW93/Cg/WctgpMaGWE0G//htXs5sJkMlk+PQEAAAAAAAAAAAAAAAAAAAAAAAAAAADuRDradV3tyKYbwoN0/af9JoqieO/4bvckpZ+kM/GfxXwUdMxRJaG4ZjVSTTeqRqQXiTwDrzPdKPVrgaAQYVdGqpRvhYLZdFSdUJT+rERQiD9e062rA39VKihEFDTdvPtx9oSgEEv7x6lXPka7MU6dHikoRN/2Tgz+GAxXln/4pTYIiqHla41xkFo/TN2icO2aWDfdyLtQ1MfwQuo23ci7MC401i81v8DwdluY52i3YYV5GNk9D/XcaGj5WmqIu89YHntL1yS49Ztu450Yl5q13QtNhWGa2D1IM7wFKRjaPkizmfhCGk6s78JsJqaE4MD2WfiOVx65razPYbwj3bKpGHZD8JwxfS4UXHcore/Feb/hris9+I77tL4RTLXd8WgOqeTmc8UJY92NI4srpA7UsrfZbPZJEOju+V2QOqOrx/gAAABAo0hHa1cpda6Y6963NouUgtEhPqXr9Toa7F7G9sRLsojbZ7SXDMLtVUS/DU9977FBr+NR5Joi1YWLkjO+MLlw/WQwmheXQQyPL97jdi5OTwzLyZ8A63+PFzb9S95K+sviffWFWfwwR8M5960hnSQffTytJpTfmW38oBQCi6H0zCc+WT/2H1IFwWHoJnQZ0gfRI7qRwdDfVfPLWEjHQsNpWlkwm40TdsXaDT3zsfIVS27Fug2n3xTMPjHMijUb+ul3BcWWOVit11BVX2Q+eZ3aYzie/ECQuxK5VkNVXPRvhLU6sFbDzc8ExYxznNZq+GN2jGF4Owy3jDvGdhhyVl61xPCNbya2xFAc2CKbthiu2L6JbTEUbNdWW2O45xqmrTFkq0XmNFw8r9fHsGJGY8ZV+sFmuNorL1BKBZ7cVQpXx0wTkckwlcFHPYB0vEPZNdUvcE1EFsNZcnOFWFe4FDBnKpnnMAz9/GHA1Kj4zLTUMBiGRVlQ6rrxhQVTsW79hoviNK+zNLy3taYPRyVrInml+gzTwWLthnHZgiFNnVj2r2mZIfHhNhTNc2Vr6jYktrJ6QL/KtIGq25BIR8iEfrVnhSG5zfOLT47tMtxRrTTc57TDkAyf1dF+wzcyLtEn+w1DMtuiC64E2GZIb9QNF+WsMKQvDcuD/YZzMnXdBcMTbUjfBLTCcEAb9mEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCMNuGRpqhBsxlJMeRe7GnCQfp386SY7Il7l+D0U6FPk/+s3H7/pbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPA7+AuM4Fva6iVlRAAAAABJRU5ErkJggg=="
                    description="I'm open to any proposition"
                />
                <ContactCard
                    url="https://github.com/yanisdolivet"
                    image="https://media.licdn.com/dms/image/D5603AQEHiJCLqY7aYw/profile-displayphoto-shrink_100_100/0/1713278204767?e=1718841600&v=beta&t=BfIx2zmGWbXGg58uHwOgsZu2abE-ednlbcuIOEIYzyk"
                    name="Yanis Dolivet"
                    mediumImage="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    description="Go check my GitHub projects"
                />
                <ContactCard
                    url="https://mail.google.com/mail/u/1/#inbox?compose=CllgCHrgmVbNJrdxTHdHcGJmWXtjlDVqrvXmfmrPzNRzMnNnDhJqHjfVhnxcxKlLLKlmmwSgbzg"
                    image="https://media.licdn.com/dms/image/D5603AQEHiJCLqY7aYw/profile-displayphoto-shrink_100_100/0/1713278204767?e=1718841600&v=beta&t=BfIx2zmGWbXGg58uHwOgsZu2abE-ednlbcuIOEIYzyk"
                    name="yanis.dolivet@epitech.eu"
                    mediumImage="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_mail_gmail_logo_icon_159346.png"
                    description="Email me here"
                />
            </div>
        </Section>
    )
};

const ContactCard = (props:  {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    url: string;
}) => {
    return (
        <Link href={props.url} className="w-full">
            <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center items-start w-full gap-4">
                <div className="relative">
                    <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain"/>
                    <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"/>
                </div>
                <div className="mr-auto">
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold">{props.name}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{props.description}</p>
                </div>
                <ArrowUpRight className="group-hover:translate-x-2 mr-8 group-hover:-translate-y-2 transition-transform mt-3" size={16}/>
            </Card>
        </Link>
    )
};
