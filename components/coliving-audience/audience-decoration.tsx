import Image from "next/image";

export default function AudienceDecorations() {
  return (
    <>
      {/* Top left big */}
      <Image
        src="/Images/Ellipse 14.png"
        alt=""
        width={90}
        height={90}
        className="absolute top-6 left-10 rounded-full border-4 border-yellow-400 object-cover"
        loading="lazy"
        quality={75}
        aria-hidden="true"
      />

      {/* Left small */}
      <Image
        src="/Images/Ellipse 15.png"
        alt=""
        width={50}
        height={50}
        className="absolute top-32 left-20 rounded-full border-4 border-yellow-400 object-cover"
        loading="lazy"
        quality={75}
        aria-hidden="true"
      />

      {/* Top right big */}
      <Image
        src="/Images/Ellipse 16.png"
        alt=""
        width={90}
        height={90}
        className="absolute top-6 right-10 rounded-full border-4 border-yellow-400 object-cover"
        loading="lazy"
        quality={75}
        aria-hidden="true"
      />

      {/* Right small */}
      <Image
        src="/Images/Ellipse 17.png"
        alt=""
        width={50}
        height={50}
        className="absolute top-32 right-20 rounded-full border-4 border-yellow-400 object-cover"
        loading="lazy"
        quality={75}
        aria-hidden="true"
      />
    </>
  );
}