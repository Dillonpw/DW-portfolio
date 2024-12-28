import images from "../../components/Images";

export async function generateMetadata({ params }) {
  const project = images.find((image) => image.id === params.projectId);
  
  if (!project) {
    return {
      title: 'Project Not Found - Dillonwalsh.com',
      description: 'Project page not found.',
    };
  }

  return {
    title: `${project.title} - Dillonwalsh.com`,
    description: "Explore recent projects and see more work on GitHub.",
    openGraph: {
      title: `${project.title} - Dillon Walsh`,
      description: "Take a look at some of my recent projects.",
      type: "website",
      url: `https://www.dillonwalsh.com/${project.id}`,
    },
    twitter: {
      card: project.src,
      title: `${project.title} - Dillonwalsh.com`,
      description: "Take a look at some of my recent projects.",
    },
  };
}

export default function ProjectLayout({ children }) {
  return children;
}