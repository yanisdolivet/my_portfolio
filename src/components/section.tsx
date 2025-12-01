import { PropsWithChildren, forwardRef } from "react"
import { cn } from "@/lib/utils"

export const Section = forwardRef<HTMLElement, PropsWithChildren<{className?:string; id?: string}>>(
    (props, ref) => {
        return (
            <section ref={ref} id={props.id} className={cn("max-w-5xl px-4 m-auto", props.className)}>
                {props.children}
            </section>
        )
    }
);

Section.displayName = "Section";
