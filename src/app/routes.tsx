import { createBrowserRouter } from "react-router";
import { Root } from "./pages/root";
import { Home } from "./pages/home";
import { Work } from "./pages/work";
import { CaseStudy } from "./pages/case-study";
import { CaseStudyEcommerce } from "./pages/case-study-ecommerce";
import { CaseStudyLegoDesignSystem } from "./pages/case-study-lego-design-system";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { NotFound } from "./pages/not-found";
import { projects } from "./data/projects";

// Maps a project's layoutType to its dedicated case study component.
// "data-driven" projects need no entry here — they're all handled by
// the generic case-study/:id route below, reading from caseStudies in
// case-study.tsx.
const layoutComponents = {
  ecommerce: CaseStudyEcommerce,
  lego: CaseStudyLegoDesignSystem,
};

const customLayoutRoutes = projects
  .filter((project) => project.layoutType !== "data-driven")
  .map((project) => ({
    path: `case-study/${project.id}`,
    Component: layoutComponents[project.layoutType],
  }));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      ...customLayoutRoutes,
      { path: "case-study/:id", Component: CaseStudy },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);