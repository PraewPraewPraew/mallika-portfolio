export interface Project 
{
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: "smart-living",
    title: "Smart Living – Admin Portal",
    description: "Admin Portal for managing and monitoring Solar Roof devices with real-time status tracking and data visualisation.",
    category: "Web Application",
    tags: ["SaaS", "Dashboard", "Data Visual"],
    image: "/src/assets/smart-living-hero.png",
  },
  {
    id: "freshcart-ecommerce",
    title: "FreshCart E-Commerce",
    description: "Rethinking the online grocery experience with streamlined checkout, smart search, and data-driven design.",
    category: "Web",
    tags: ["E-Commerce", "Web", "UX Strategy"],
    image: "https://images.unsplash.com/photo-1764194790147-8a1e47a91a3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
  },
  {
    id: "lego-design-system",
    title: "Building Blocks Design System",
    description: "Building a token-first design system from scratch where brand identity was evolving and deadlines weren't waiting.",
    category: "Design System",
    tags: ["Tokens", "Components", "Documentation"],
    image: "https://images.unsplash.com/photo-1724745523036-bfceadebcd50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
  },
  {
    id: "nova-banking",
    title: "Nova Banking",
    description: "Reimagining digital banking for Gen Z with a focus on financial literacy and gamification.",
    category: "App",
    tags: ["Mobile", "Fintech", "UX Research"],
    image: "https://images.unsplash.com/photo-1660732106134-f3009a1e90ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
  },
];