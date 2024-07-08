
const projects = document.querySelectorAll('.portfolio__project');


 projects.forEach(project => {
        project.addEventListener('click', () => {
                const url = project.getAttribute('data-url');
                window.location.href = url;
            });
        });