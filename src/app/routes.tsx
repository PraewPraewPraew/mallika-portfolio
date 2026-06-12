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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "case-study/freshcart-ecommerce", Component: CaseStudyEcommerce },
      { path: "case-study/lego-design-system", Component: CaseStudyLegoDesignSystem },
      { path: "case-study/:id", Component: CaseStudy },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);