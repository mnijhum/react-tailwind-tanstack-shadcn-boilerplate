import { About } from "@/module/about";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: AboutRoute,
});

function AboutRoute() {
  return <About />;
}
