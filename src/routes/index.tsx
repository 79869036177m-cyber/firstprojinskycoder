import { createFileRoute } from "@tanstack/react-router";
import { Bot, Gift, Globe, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const packages = [
  {
    badge: "Стартовый",
    title: "Сайт приёма заявок",
    description:
      "Быстрый старт онлайн-присутствия: лендинг с формой обратной связи для сбора заявок и общения с клиентами.",
    preview: {
      icon: Globe,
      gradient: "from-emerald-400/20 to-teal-600/20",
    },
    solutions: ["Лендинг", "Форма заявок", "Обратная связь"],
  },
  {
    badge: "Продвинутый",
    title: "Бот + сайт + база данных",
    description:
      "Автоматизация коммуникаций: чат-бот для общения, сайт и база данных для хранения клиентской информации.",
    preview: {
      icon: Bot,
      gradient: "from-green-400/20 to-emerald-600/20",
    },
    solutions: ["Чат-бот", "Сайт", "База данных"],
  },
  {
    badge: "Максимальный",
    title: "Решение под ключ",
    description:
      "Полная цифровизация бизнеса: боты, сайт, база данных и бизнес-метрики. В подарок — ИИ-ассистент.",
    preview: {
      icon: Sparkles,
      gradient: "from-lime-400/20 to-green-600/20",
    },
    solutions: ["Боты", "Сайт", "База данных", "Бизнес-метрики"],
    gift: "1 ИИ ассистент",
  },
];

interface Package {
  badge: string;
  title: string;
  description: string;
  preview: {
    icon: React.ComponentType<{ className?: string }>;
    gradient: string;
  };
  solutions: string[];
  gift?: string;
}

function PackageCard({ pkg }: { pkg: Package }) {
  const PreviewIcon = pkg.preview.icon;

  return (
    <div className="group relative rounded-2xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent p-[1px] transition-all duration-300 hover:from-primary/50 hover:to-primary/20 hover:shadow-2xl hover:shadow-primary/10">
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-card p-5">
        <div
          className={`relative mb-5 flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${pkg.preview.gradient}`}
        >
          <div className="rounded-2xl bg-card/80 p-4 backdrop-blur-sm">
            <PreviewIcon className="h-8 w-8 text-primary" />
          </div>
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} pkg={pkg} />
          ))}
        </div>
      </section>
    </div>
  );
}
