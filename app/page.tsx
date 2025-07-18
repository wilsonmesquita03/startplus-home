import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center bg-black text-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-0"></div>

        <div className="z-10 text-center px-6 flex flex-col items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={180}
            height={60}
            className="mb-8"
          />

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Estamos preparando algo especial para você
          </h1>

          <p className="text-lg md:text-xl mb-6 text-gray-300">
            Nossa nova plataforma de aprendizagem será lançada em breve. Fique atento!
          </p>

          <a
            href="https://aprender.escolastart.plus"
            className="inline-block bg-[#0297E7] hover:opacity-80 text-white font-semibold py-3 px-6 rounded transition duration-300 mb-4"
          >
            Acessar Área de Aprendizagem
          </a>

          <a
            href="https://wa.me/5521995668151"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:opacity-80 text-white font-semibold py-3 px-6 rounded transition duration-300"
          >
            Fale conosco no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
