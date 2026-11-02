import GitHubActivity from '../components/GitHubActivity';
import ProjectCard from '../components/ProjectCard';
import { customProjects } from '../data/projectsData';

const Projects = () => {
    return (
        <div className="px-6 py-16">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* GitHub Activity Section */}
                <section className="animate-fade-in">
                    <GitHubActivity />
                </section>

                {/* Custom Projects Section */}
                <section className="animate-slide-up">
                    <h2 className="text-3xl font-bold gradient-text mb-6">My Projects</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {customProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Projects;
