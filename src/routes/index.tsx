import type { ComponentType } from "react";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Gift,
  Rocket,
  Bot,
  Database,
  Puzzle,
  Zap,
  Code2,
  FlaskConical,
  Send,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import starterImage from "../assets/package-starter.jpg";
import advancedImage from "../assets/package-advanced.jpg";
import maximumImage from "../assets/package-maximum.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Аналитика для бизнеса" },
      {
        name: "description",
        content:
          "Готовые цифровые решения для бизнеса: сайты, чат-боты, базы данных и ИИ-ассистенты. Быстрый запуск, понятный продукт и поддержка.",
      },
      { property: "og:title", content: "Аналитика для бизнеса" },
      {
        property: "og:description",
        content:
          "Готовые цифровые решения для бизнеса: сайты, чат-боты, базы данных и ИИ-ассистенты. Быстрый запуск, понятный продукт и поддержка.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://firstprojinskycoder.lovable.app/",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://firstprojinskycoder.lovable.app/",
      },
    ],
  }),
});

const packages = [
  {
    badge: "Стартовый",
    title: "Сайт приёма заявок",
    description:
      "Быстрый старт онлайн-присутствия: лендинг с формой обратной связи для сбора заявок и общения с клиентами.",
    image: starterImage,
    solutions: ["Лендинг", "Форма заявок", "Обратная связь"],
  },
  {
    badge: "Продвинутый",
    title: "Бот + сайт + база данных",
    description:
      "Автоматизация коммуникаций: чат-бот для общения, сайт и база данных для хранения клиентской информации.",
    image: advancedImage,
    solutions: ["Чат-бот", "Сайт", "База данных"],
  },
  {
    badge: "Максимальный",
    title: "Решение под ключ",
    description:
      "Полная цифровизация бизнеса: боты, сайт, база данных и бизнес-метрики. В подарок — ИИ-ассистент.",
    image: maximumImage,
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
      "Создаю сайт, где клиент узнаёт о вас, свяжется или оставит заявку.",
    tag: "Скорость × Качество",
  },
  {
    icon: Bot,
    title: "Роботы-помощники",
    description:
      "Робот ответит на вопросы клиентов и соберёт их потребности, чтобы вы общались уже подготовленными.",
    tag: "Автоматизация × Внимание",
  },
  {
    icon: Database,
    title: "База данных",
    description:
      "Настраиваю хранилище данных: клиенты, заявки и ключевые метрики в одном месте.",
    tag: "Данные × Контроль",
  },
  {
    icon: Puzzle,
    title: "Комплексное решение",
    description:
      "Сайт, бот, база данных и ИИ-ассистент, который подскажет, как повысить продажи и лояльность клиентов.",
    tag: "Полный цикл × ИИ",
  },
];

interface Benefit {
  icon: ComponentType<{ className?: string }>;
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

const processSteps = [
  {
    number: "1",
    icon: Zap,
    title: "Собираю ваши желания и предпочтения",
    description:
      "Узнаю ваши потребности, цели и особенности бизнеса, чтобы предложить решение, которое вам действительно подходит.",
  },
  {
    number: "2",
    icon: Code2,
    title: "Готовлю первое решение",
    description:
      "Создаю работающий продукт, презентую вам и отправляю тестировать на живых клиентах.",
  },
  {
    number: "3",
    icon: FlaskConical,
    title: "Собираю обратную связь и корректирую",
    description:
      "Анализирую результат теста, вношу правки и добавляю в продукт ваши новые идеи.",
  },
  {
    number: "4",
    icon: Rocket,
    title: "Отдаю полное промышленное решение",
    description:
      "Запускаю финальную версию и остаюсь на связи для поддержки и дальнейшего развития.",
  },
];

interface ProcessStep {
  number: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

function StepCard({ step }: { step: ProcessStep }) {
  const Icon = step.icon;
  return (
    <div className="group relative rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-card-foreground">
        {step.title}
      </h3>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {step.description}
      </p>
    </div>
  );
}

function Index() {
  return (
    <div className="dark min-h-screen text-foreground">
      <section id="hero" className="mx-auto w-full max-w-6xl px-4 py-12 md:py-20">
        <div className="mb-10 text-center md:mb-14">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Решения для вашего бизнеса
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground md:text-lg">
            Готовые пакеты от вайбкодера: от простого сайта до полной
            автоматизации с ИИ.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full gap-2 sm:w-auto">
              <a href="#hero">
                Проекты
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full gap-2 sm:w-auto">
              <a href="#contact">
                Оставить заявку
              </a>
            </Button>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-center gap-4 md:mb-10">
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

      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-20">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Что вы получаете от работы со мной
          </h2>
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Упрощаю вашу работу, даю понятный продукт
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} benefit={benefit} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-20">
        <div className="mb-10 flex items-center justify-center gap-3 md:mb-14">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Как мы идем к цели
          </h2>
        </div>

        <div className="relative">
          {/* Desktop horizontal timeline line */}
          <div className="absolute top-[1.25rem] left-[12.5%] right-[12.5%] hidden h-0.5 bg-gradient-to-r from-primary via-chart-2 to-chart-5 md:block" />

          <div className="grid gap-8 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative flex gap-4 md:block">
                {/* Mobile vertical connector line */}
                {index !== processSteps.length - 1 && (
                  <div
                    className={`absolute top-10 left-5 h-[calc(100%-2.5rem)] w-0.5 -translate-x-1/2 md:hidden ${
                      index === 0
                        ? "bg-gradient-to-b from-primary to-chart-2"
                        : index === 1
                          ? "bg-gradient-to-b from-chart-2 to-chart-4"
                          : "bg-gradient-to-b from-chart-4 to-chart-5"
                    }`}
                  />
                )}

                {/* Number circle */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-chart-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 md:mx-auto md:mb-6">
                  {step.number}
                </div>

                <StepCard step={step} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}

const TELEGRAM_URL = "https://t.me/username";

function ContactSection() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error("Заполните имя и номер телефона");
      return;
    }
    toast.success("Заявка отправлена! Свяжусь с вами в ближайшее время.");
    setName("");
    setPhone("");
    setComment("");
    setOpen(false);
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-12 md:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/20 via-card/80 to-card/60 p-8 text-center md:p-14">
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-chart-3/20 blur-3xl" />

        <div className="relative">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Свяжись со мной
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base text-muted-foreground md:text-lg">
            Напишите в Telegram или оставьте заявку — обсудим ваш проект и
            подберём подходящее решение.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full gap-2 sm:w-auto">
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                <Send className="h-4 w-4" />
                Написать в Telegram
              </a>
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full gap-2 sm:w-auto"
                >
                  <MessageSquare className="h-4 w-4" />
                  Оставить заявку
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Оставить заявку</DialogTitle>
                  <DialogDescription>
                    Заполните форму — свяжусь с вами в ближайшее время.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2 text-left">
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input
                      id="contact-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ваше имя"
                      maxLength={100}
                      required
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <Label htmlFor="contact-phone">Номер телефона</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      maxLength={30}
                      required
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <Label htmlFor="contact-comment">
                      Комментарий{" "}
                      <span className="text-muted-foreground">
                        (не обязательно)
                      </span>
                    </Label>
                    <Textarea
                      id="contact-comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Расскажите о вашем проекте"
                      maxLength={1000}
                      rows={4}
                    />
                  </div>
                  <DialogFooter>
                    <Button type="submit" className="w-full sm:w-auto">
                      Отправить заявку
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
