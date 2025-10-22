
document.addEventListener('DOMContentLoaded', () => {
    const projectCardsContainer = document.getElementById('project-cards');

    if (projectCardsContainer) {
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'flex flex-col justify-start rounded-lg bg-white dark:bg-[#1c2127] border-2 border-black dark:border-white p-4 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#FFF]';

            const statusColor = project.status === 'In Progress' ? 'green' : project.status === 'On Hold' ? 'yellow' : 'blue';

            card.innerHTML = `
                <div class="flex flex-col gap-3">
                    <p class="text-lg font-bold leading-tight tracking-[-0.015em] text-black dark:text-white">${project.name}</p>
                    <span class="text-xs font-medium px-2 py-1 rounded-full bg-${statusColor}-100 dark:bg-${statusColor}-900 text-${statusColor}-800 dark:text-${statusColor}-200 self-start">${project.status}</span>
                    <p class="text-sm font-normal leading-normal text-gray-600 dark:text-[#9dabb9]">${project.description}</p>
                    <div class="flex flex-col gap-2 mt-2">
                        <div class="flex justify-between">
                            <p class="text-sm font-medium leading-normal text-gray-600 dark:text-white">Completion</p>
                            <p class="text-sm font-normal leading-normal text-gray-600 dark:text-white">${project.progress}%</p>
                        </div>
                        <div class="rounded bg-gray-200 dark:bg-[#3b4754]">
                            <div class="h-2 rounded bg-primary" style="width: ${project.progress}%;"></div>
                        </div>
                    </div>
                    <button class="flex min-w-[84px] w-full mt-4 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-primary text-white text-sm font-medium leading-normal">
                        <span class="truncate">View Project Details</span>
                    </button>
                </div>
            `;
            projectCardsContainer.appendChild(card);
        });
    }
});
