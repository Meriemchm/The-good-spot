"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { useState } from "react";
import { createContactSchema, ContactFormData } from "@/schemas/contactSchema";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/button";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);

  // Labels du formulaire
  const t = useTranslations("contact.contact_form");

  //  Messages d'erreur Zod
  const tErrors = useTranslations("contact.contact_form_errors");

  // Schema dynamique avec traduction
  const schema = createContactSchema(tErrors);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSending(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: `${data.firstName} ${data.lastName}`,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(() => {
        toast.success(t("success"));
        reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error(t("error"));
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label={t("lastname")}
          name="lastName"
          register={register}
          error={errors.lastName}
        />

        <InputField
          label={t("firstname")}
          name="firstName"
          register={register}
          error={errors.firstName}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label={t("email")}
          name="email"
          type="email"
          register={register}
          error={errors.email}
        />

        <InputField
          label={t("phone")}
          name="phone"
          type="tel"
          register={register}
          error={errors.phone}
        />
      </div>
      <InputField
        label={t("subject")}
        name="subject"
        register={register}
        error={errors.subject}
      />
      <InputField
        label={t("message")}
        name="message"
        textarea
        register={register}
        error={errors.message}
      />
      <Button type="submit" disabled={isSending} className="mt-4">
        {isSending ? t("sending") : t("submit")}
      </Button>
    </form>
  );
};

export default ContactForm;
