import { ComponentPropsWithoutRef } from "react";

export const KotlinIcon = (
    props: ComponentPropsWithoutRef<"svg"> & {size?: number}
) => {
    return (
        <svg
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 48}
            height={props.size || 48}
            fill="currentColor"
            {...props}
        >
            <defs>
                <linearGradient id="kotlin-gradient-1" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0095D5" />
                    <stop offset="30%" stopColor="#238AD9" />
                    <stop offset="60%" stopColor="#557BDE" />
                    <stop offset="100%" stopColor="#7F52FF" />
                </linearGradient>
            </defs>
            <path
                fill="url(#kotlin-gradient-1)"
                d="M0 128L128 0v128H0z M64 0L0 64V0h64z"
            />
        </svg>
    );
};
