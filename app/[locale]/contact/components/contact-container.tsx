import { Container } from "@/components/ui/container";
import React from "react";
import ContactForm from "./contact-form";

import { useGsapFade } from "@/hooks/useGsapFade";
import ContactInfo from "./contact-info";
import { ContactHeader } from "./contact-header";
import ContactLeft from "./contact-left";

export const ContactContainer = () => {
  const fadeup = useGsapFade("up");
  return (
    <div>
      <div
        className="h-full bg-cover bg-center bg-thirdary rounded-br-2xl rounded-bl-2xl"
        style={{ backgroundImage: "url('/images/contact-bg.png')" }} 
      >
        <Container className="py-24">
          {" "}
          <div className="grid md:grid-cols-2 grid-cols-1 py-24 gap-12 md:gap-6 ">
            <ContactLeft />

            <div
              className="bg-white rounded-2xl p-8 flex flex-col gap-6"
              ref={fadeup}
            >
              <ContactHeader />
              <ContactForm />
            </div>
          </div>
        </Container>{" "}
      </div>
      <ContactInfo />
    </div>
  );
};
