/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  GraduationCap,
  TrendingUp,
  Users,
  Newspaper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Logo from "@/public/logo.svg"

// -----------------------------------------------------------------------------
// Página única (app/page.tsx). Todos os componentes locais ficam neste arquivo
// para facilitar o copy-paste. Você pode extrair cada seção p/ components/ depois.
// -----------------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-dvh bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <HeroArea />
        <CursosSection />
        <GptwBadge />
        <BlogSection />
        <Footer />
      </main>
    </>
  );
}

// -----------------------------------------------------------------------------
// Hero
// -----------------------------------------------------------------------------
function HeroArea() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/capa-home.png" layout="fill" objectFit="cover" alt="Capa Home" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-white"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              Escola START • Aprendizagem que gera resultado
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-white mt-4 text-pretty text-4xl font-extrabold leading-tight tracking-tight md:text-5xl"
            >
              Capacite seu time com formações práticas e orientadas a resultados
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 max-w-prose text-lg text-white dark:text-neutral-300"
            >
              Programas intensivos, mentoria e conteúdos aplicáveis desde o primeiro
              dia. Trazemos performance para as áreas de Operações, Gestão e Dados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button size="lg" className="h-11 px-6 text-base">
                Fale com nossos especialistas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-11 px-6 text-base">
                Ver catálogo de cursos
              </Button>
            </motion.div>

            <dl className="mt-10 grid w-full grid-cols-3 gap-4 text-sm">
              <Stat icon={GraduationCap} value="+15k" label="Alunos formados" />
              <Stat icon={Users} value="+300" label="Times treinados" />
              <Stat icon={TrendingUp} value="4.9/5" label="Satisfação média" />
            </dl>
          </div>


        </div>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: any;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border p-3">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-neutral-100">
        <Icon className="h-5 w-5 text-black" />
      </div>
      <div>
        <div className="text-lg font-semibold text-gray-200">{value}</div>
        <div className="text-xs text-neutral-500 dark:text-neutral-400">{label}</div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Seção: 3 Cursos
// -----------------------------------------------------------------------------
const cursos = [
  {
    title: "Expert em Excel",
    desc: "Domine funções avançadas, dashboards e automação para decisões rápidas.",
    href: "#",
  },
  {
    title: "Liderança e Gestão de Gente",
    desc: "Ferramentas práticas de liderança, feedback, performance e cultura.",
    href: "#",
  },
  {
    title: "Gestão Financeira Eficaz",
    desc: "Fluxo de caixa, orçamento, indicadores e análises para o negócio.",
    href: "#",
  },
] as const;

function CursosSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Cursos em destaque</h2>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
            Treinamentos objetivos, dinâmicos e com projetos reais.
          </p>
        </div>
        <Button variant="ghost" className="hidden md:inline-flex">
          Ver todos os cursos <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cursos.map((c, idx) => (
          <Card
            key={idx}
            className="group overflow-hidden border-neutral-200/70 dark:border-neutral-800"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                  <GraduationCap className="h-4 w-4" />
                </span>
                {c.title}
              </CardTitle>
              <CardDescription>{c.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Aulas ao vivo + materiais
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Projetos aplicados ao seu negócio
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Certificado de conclusão
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-xs text-neutral-500">
                <Users className="h-4 w-4" /> Turmas corporativas
              </div>
              <Button asChild size="sm">
                <a href={c.href}>
                  Saber mais <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Componente: GPTW
// -----------------------------------------------------------------------------
function GptwBadge() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="relative rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 ring-1 ring-black/5 dark:from-neutral-900 dark:to-neutral-800 dark:ring-white/10 md:p-10">
        {/* grid 2 colunas */}
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Coluna: texto */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
              <Award className="h-4 w-4" /> Reconhecimento em clima e cultura
            </div>

            <h3 className="mt-3 text-pretty text-xl font-semibold md:text-2xl">
              Transformando histórias <br />
              <strong>Mudando Vidas</strong>
            </h3>

            <p className="mt-2 max-w-prose text-sm text-neutral-600 dark:text-neutral-300">
              Com quase 10 anos de trajetória, a Escola START já transformou a
              vida de mais de 27 mil alunos por meio de uma metodologia
              inovadora e acessível, que combina habilidades essenciais com as
              competências técnicas mais demandadas pelo mercado de trabalho em
              cursos para quem não pode perder tempo. Somos uma escola
              disruptiva, reconhecida por nossa cultura e valores com o prêmio
              Great Places to Work 2024 e também pelo prêmio Exame Negócios em
              Expansão 2023, que reflete nosso compromisso com o crescimento
              profissional dos nossos alunos.
              <br />
              <br />
              Aqui, você encontra mais do que cursos: encontra a qualificação
              profissional que vai transformar sua história e trazer uma
              verdadeira mudança na sua vida.
            </p>
          </div>

          {/* Coluna: imagem da equipe (PNG) */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden  ring-black/10 dark:ring-white/10">
              <Image
                src="/team.png" // <-- troque aqui
                alt="Equipe START vestindo a camisa do GPTW"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="absolute -bottom-20 right-12 h-24 w-20 sm:h-28 sm:w-24 md:h-32 md:w-28 lg:h-36 lg:w-32 drop-shadow-2xl">
          <Image
            src="/gptw.svg" // <-- troque aqui
            alt="" // decorativo
            fill
            className="object-contain"
            sizes="(min-width:1024px) 8rem, (min-width:768px) 7rem, (min-width:640px) 6rem, 5rem"
          />
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Marquee de clientes (texto/logos) — substitua pelos logos reais do seu time
// -----------------------------------------------------------------------------
const clientes = [
  "Nubank",
  "Itaú",
  "Ambev",
  "Vale",
  "Petrobras",
  "Magalu",
  "Globo",
  "Gerdau",
  "B3",
  "Santander",
];

function ClientesMarquee() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex flex-col items-center text-center">
        <p className="text-xs font-medium tracking-widest text-neutral-500">
          ELES CONFIAM NA NOSSA METODOLOGIA
        </p>
        <h3 className="mt-1 text-xl font-semibold md:text-2xl">Parcerias que geram impacto</h3>
      </div>

      <div className="relative mt-6 overflow-hidden">
        {/* Pista duplicada para loop suave */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
          className="flex min-w-[200%] gap-6"
          aria-label="Marcas de clientes"
        >
          {[...clientes, ...clientes].map((c, i) => (
            <Image src={`/clientes/${c}.png`} width={100} height={100} objectFit="contain" alt={c} key={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Seção Blog (placeholders) — conecte com sua API/CMS quando quiser
// -----------------------------------------------------------------------------
const posts = [
  {
    title: "Como elevar a produtividade com rituais de gestão",
    excerpt:
      "Roteiro prático para implementar rituais semanais e indicadores visíveis.",
    date: "12 Ago 2025",
    href: "#",
    img: "/blog/1.png"
  },
  {
    title: "Dashboards que contam histórias: do Excel ao insight",
    excerpt:
      "Princípios de visualização e modelos prontos para o seu time começar hoje.",
    date: "28 Jul 2025",
    href: "#",
    img: "/blog/2.png"
  },
  {
    title: "Onboarding de líderes: 90 dias para tracionar a equipe",
    excerpt:
      "Checklist e trilha de aprendizagem para novos gestores performarem rápido.",
    date: "03 Jun 2025",
    href: "#",
    img: "/blog/3.png"
  },
] as const;

function BlogSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Conteúdos do nosso blog</h2>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
            Insights práticos sobre gestão, dados e operações.
          </p>
        </div>
        <Button variant="ghost" className="hidden md:inline-flex">
          Ver todos <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, idx) => (
          <Card key={idx} className="overflow-hidden border-none bg-gradient-to-br from-neutral-900 to-neutral-800 ring-white/10 pb-4 pt-0 ">
            <div className="relative h-40 w-full">
              <Image src={p.img} fill objectFit="cover" alt="banner" />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px]">
                  <Newspaper className="h-3 w-3" /> Blog START
                </span>
                <span className="text-xs text-neutral-500">{p.date}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">{p.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" size="sm">
                <a href={p.href}>
                  Ler artigo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Footer
// -----------------------------------------------------------------------------
function Footer() {
  return (
    <footer className="border-t bg-neutral-50/60 py-14 text-sm dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-4">
        <div>
          <div className="text-lg font-bold">
            <Image src={Logo} alt="Logo" width={120} height={40} />
          </div>
          <p className="mt-2 max-w-xs text-neutral-600 dark:text-neutral-300">
            Aprendizagem corporativa que transforma competências em performance.
          </p>
        </div>
        <nav className="grid gap-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Cursos
          </div>
          <a className="hover:underline" href="#">Expert em Excel</a>
          <a className="hover:underline" href="#">Liderança e Gestão de Gente</a>
          <a className="hover:underline" href="#">Gestão Financeira Eficaz</a>
        </nav>
        <nav className="grid gap-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Institucional
          </div>
          <a className="hover:underline" href="#">Sobre</a>
          <a className="hover:underline" href="#">Cases</a>
          <a className="hover:underline" href="#">Blog</a>
        </nav>
        <div className="grid gap-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Contato
          </div>
          <p>administrativo@canaisstart.com.br</p>
          <p>CNPJ 23.755.892/0001-36</p>
          <div className="mt-2 flex gap-2">
            <a className="rounded-lg border px-2 py-1" href="#">LinkedIn</a>
            <a className="rounded-lg border px-2 py-1" href="#">Instagram</a>
            <a className="rounded-lg border px-2 py-1" href="#">YouTube</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4 text-xs text-neutral-500">
        © {new Date().getFullYear()} Escola START. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-center sticky top-0 z-50 w-full h-[80px] bg-[#232323]">
      <Image src={Logo} alt="Logo" width={120} height={40} />
    </header>
  )
}