import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Starfield } from "@/components/taro/Starfield";
import { PortalMark } from "@/components/taro/Symbols";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-6xl text-gold">Caminho não encontrado</h1>
        <p className="mt-3 text-sm text-mist/70">
          Esta porta ainda não foi aberta. Volte ao início para retirar sua carta.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-gold/45 px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-mist">Esta página não carregou</h1>
        <p className="mt-2 text-sm text-mist/70">
          Algo se perdeu no caminho. Tente novamente ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full border border-gold/45 px-5 py-2.5 text-sm font-semibold text-gold hover:bg-gold/10"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-mist/25 px-5 py-2.5 text-sm font-semibold text-mist hover:bg-mist/10"
          >
            Ir para o início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tarô da Aprovação" },
      {
        name: "description",
        content:
          "Uma experiência lúdica e pedagógica: retire uma carta e descubra sua próxima missão de estudos.",
      },
      { property: "og:title", content: "Tarô da Aprovação" },
      {
        property: "og:description",
        content:
          "As cartas não preveem a sua aprovação. Elas ajudam você a construir o caminho até ela.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0B1026" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/minha-jornada", label: "Minha jornada" },
  { to: "/sobre", label: "Sobre o Tarô" },
] as const;

function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-night/70 backdrop-blur-md">
      <nav
        aria-label="Navegação principal"
        className="mx-auto grid max-w-3xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3"
      >
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <PortalMark className="h-6 w-auto shrink-0 text-gold" />
          <span className="truncate font-display text-lg text-mist">Tarô da Aprovação</span>
        </Link>
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="rounded-full px-2.5 py-1.5 text-[0.72rem] font-medium text-mist/65 transition-colors hover:text-mist sm:text-sm"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Starfield />
      <SiteNav />
      <main className="mx-auto min-h-[70vh] w-full max-w-3xl px-4 pb-20 pt-6">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <footer className="pb-8 text-center text-xs text-mist/45">
        Uma dinâmica pedagógica. As cartas não fazem previsões.
      </footer>
    </QueryClientProvider>
  );
}
