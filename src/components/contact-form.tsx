"use client"

import { useState } from "react";
import { Section } from "./section";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { ShinyCard } from "./micro-interactions/shiny-card";
import { useLanguage } from "@/contexts/language-context";

export const ContactForm = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setStatus("loading");

        try {
            // Using Web3Forms (free service)
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: "New Portfolio Contact Form Submission",
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error for this field
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <Section id="contact" className="py-20">
            <div className="space-y-8">
                <div className="space-y-3 text-center">
                    <Badge variant="outline" className="mb-2">{t("contact.badge")}</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        {t("contact.title")}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t("contact.description")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Contact Form */}
                    <ShinyCard>
                        <Card className="p-6 md:p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        {t("contact.form.name")}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 rounded-lg border ${
                                            errors.name ? "border-red-500" : "border-border"
                                        } bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
                                        placeholder="John Doe"
                                        disabled={status === "loading"}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        {t("contact.form.email")}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 rounded-lg border ${
                                            errors.email ? "border-red-500" : "border-border"
                                        } bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
                                        placeholder="john@example.com"
                                        disabled={status === "loading"}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        {t("contact.form.message")}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className={`w-full px-4 py-2 rounded-lg border ${
                                            errors.message ? "border-red-500" : "border-border"
                                        } bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none`}
                                        placeholder="Tell me about your project..."
                                        disabled={status === "loading"}
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full gap-2 relative overflow-hidden group"
                                    disabled={status === "loading"}
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            {t("contact.form.sending")}
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            {t("contact.form.send")}
                                        </>
                                    )}
                                    <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </Button>

                                {status === "success" && (
                                    <div className="flex items-center gap-2 text-green-500 bg-green-500/10 p-3 rounded-lg animate-fade-in">
                                        <CheckCircle size={20} />
                                        <span>{t("contact.form.success")}</span>
                                    </div>
                                )}

                                {status === "error" && (
                                    <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg animate-fade-in">
                                        <AlertCircle size={20} />
                                        <span>{t("contact.form.error")}</span>
                                    </div>
                                )}
                            </form>
                        </Card>
                    </ShinyCard>

                    {/* CTA Card */}
                    <ShinyCard>
                        <Card className="p-6 md:p-8 h-full flex flex-col justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                            <div className="space-y-6">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <Mail size={32} className="text-primary" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{t("contact.cta")}</h3>
                                    <p className="text-muted-foreground">
                                        {t("contact.cta.desc")}
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow" />
                                        <span className="text-muted-foreground">Available for new projects</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse-slow" />
                                        <span className="text-muted-foreground">Usually responds within 24h</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse-slow" />
                                        <span className="text-muted-foreground">Remote-friendly</span>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <p className="text-sm text-muted-foreground mb-2">Or reach out directly:</p>
                                    <a
                                        href="mailto:yanis.dolivet@epitech.eu"
                                        className="text-primary font-medium hover:underline"
                                    >
                                        yanis.dolivet@epitech.eu
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </ShinyCard>
                </div>
            </div>
        </Section>
    );
};
