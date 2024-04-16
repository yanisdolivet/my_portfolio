import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import Link from "next/link";
import { Section } from "./section";
import { GitHubIcon } from "./icons/GitHub_icon";
import { LinkedInIcon } from "./icons/LinkedIn_icon";
import { GmailIcon } from "./icons/GmailIcon";


export const Header = () => {
    return (
        <header className="sticky top-0">
            <Section className="flex items-baseline pb-6">
                <h1 className="text-lg font-bold text-primary py-4">
                    Welcome To My Porfolio !
                </h1>
                <div className="flex-1" />
                <ul className="flex item-center gap-2">
                    <Link href="https://github.com/yanisdolivet" className={cn(buttonVariants({ variant : "outline" }), "size-6 p-0")}>
                        <GitHubIcon size={16} className="text-foreground"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/yanis-dolivet-1850702a4/" className={cn(buttonVariants({ variant : "outline" }), "size-6 p-0")}>
                        <LinkedInIcon size={16} className="text-foreground"/>
                    </Link>
                    <Link href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCHrgmVbNJrdxTHdHcGJmWXtjlDVqrvXmfmrPzNRzMnNnDhJqHjfVhnxcxKlLLKlmmwSgbzg" className={cn(buttonVariants({ variant : "outline" }), "size-6 p-0")}>
                        <GmailIcon size={16} className="text-foreground"/>
                    </Link>
                </ul>
            </Section>
        </header>
    )
};
