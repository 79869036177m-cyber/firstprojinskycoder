import type { ComponentType } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Gift, Rocket, Bot, Database, Puzzle } from "lucide-react";
import starterAsset from "../assets/package-starter.png.asset.json";
import advancedAsset from "../assets/package-advanced.png.asset.json";
import maximumAsset from "../assets/package-maximum.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const packages = [
  {
    badge: "Стартовый",
    title: "Сайт приёма заявок",
    description:
      "Быстрый старт онлайн-присутствия: лендинг с формой обратной связи для сбора заявок и общения с клиентами.",
    image: starterAsset.url,
    solutions: ["Лендинг", "Форма заявок", "Обратная связь"],
  },
  {
    badge: "Продвинутый",
    title: "Бот + сайт + база данных",
    description:
      "Автоматизация коммуникаций: чат-бот для общения, сайт и база данных для хранения клиентской информации.",
    image: advancedAsset.url,
    solutions: ["Чат-бот", "Сайт", "База данных"],
  },
  {
    badge: "Максимальный",
    title: "Решение под ключ",
    description:
      "Полная цифровизация бизнеса: боты, сайт, база данных и бизнес-метрики. В подарок — ИИ-ассистент.",
    image: maximumAsset.url,
    solutions: ["Боты", "Сайт", "База данных", "Бизнес-метрики"],
    gift: "1 ИИ ассистент",
  },
];

interface Package {
  badge: string;
  title: string;
  description: string;
  image: string;
  solutions: string[];
  gift?: string;
}

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div className="group relative rounded-2xl bg-gradient-to-br from-primary/50 via-primary/20 to-primary/40 p-[1px] transition-all duration-300 hover:-translate-y-1 hover:from-primary/70 hover:via-primary/30 hover:to-primary/50 hover:shadow-2xl hover:shadow-primary/20">
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-card/95 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
        <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl">
          <img
            src={pkg.image}
            alt={pkg.title}
            loading="lazy"
            width={1024}
            height={640}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
        </div>

        <div className="mb-3 inline-flex w-fit items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-secondary-foreground">
          {pkg.badge}
        </div>

        <h3 className="mb-2 text-xl font-semibold text-card-foreground">
          {pkg.title}
        </h3>

        <p className="mb-4 text-sm text-muted-foreground">{pkg.description}</p>

        {pkg.gift && (
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
            <Gift className="h-3.5 w-3.5" />
            <span>В подарок: {pkg.gift}</span>
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2">
          {pkg.solutions.map((solution) => (
            <span
              key={solution}
              className="rounded-lg border border-border bg-background/50 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {solution}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const benefits = [
  {
    icon: Rocket,
    title: "Рабочее первое решение за 2 дня",
    description:
      "Создаю для вас сайт, на котором клиент может познакомиться с вами, связаться или оставить заявку.",
    tag: "Скорость × Качество",
  },
  {
    icon: Bot,
    title: "Роботы-помощники",
    description:
      "Включаю робота-помощника, который сам будет отвечать клиенту и снимать с вас необходимость реагировать на базовые вопросы. Перед тем как связаться с клиентом, вы сразу будете знать его потребность.",
    tag: "Автоматизация × Внимание",
  },
  {
    icon: Database,
    title: "База данных",
    description:
      "Добавляю вам хранилище данных, в котором вы сможете следить за важными для вас бизнес-метриками и хранить данные клиентов.",
    tag: "Данные × Контроль",
  },
  {
    icon: Puzzle,
    title: "Комплексное решение",
    description:
      "На этом этапе вы получаете сайт, телеграмм бота, хранилище данных, а также персонального ИИ-ассистента, который будет подсказывать, как улучшить ваши продажи или лояльность клиента путём анализа полученных данных.",
    tag: "Полный цикл × ИИ",
  },
];

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tag: string;
}

function BenefitCard({ benefit }: { benefit: Benefit }) {
  const Icon = benefit.icon;
  return (
    <div className="group relative rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-card-foreground">
        {benefit.title}
      </h3>

      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
        {benefit.description}
      </p>

      <div className="mt-auto inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
        {benefit.tag}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12 text-center md:mb-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Решения для вашего бизнеса
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Готовые пакеты от вайбкодера: от простого сайта до полной
            автоматизации с ИИ.
          </p>
        </div>

        <div className="mb-10 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-primary/30" />
          <h2 className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Пакетные предложения
          </h2>
          <span className="h-px w-16 bg-primary/30" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} pkg={pkg} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Упрощаю вашу работу, даю понятный продукт
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Что вы получаете от работы со мной
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} benefit={benefit} />
          ))}
        </div>
      </section>
    </div>
  );
}
