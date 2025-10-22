
const projects = [
    {
        name: 'Project Alpha',
        status: 'In Progress',
        progress: 75,
        description: 'A cutting-edge mobile application for seamless user experience.',
    },
    {
        name: 'Project Beta',
        status: 'On Hold',
        progress: 40,
        description: 'Enterprise-level platform for data analytics and visualization.',
    },
    {
        name: 'Project Gamma',
        status: 'Completed',
        progress: 100,
        description: 'E-commerce solution with a focus on user conversion.',
    },
    {
        name: 'Project Delta',
        status: 'In Progress',
        progress: 25,
        description: 'A new project to explore the potential of AI in the creative industries.',
    },
];

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#1173d4",
                "background-light": "#f6f7f8",
                "background-dark": "#101922",
                "neobrutalist-border": "#111827",
                "neobrutalist-border-dark": "#F9FAFB",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            boxShadow: {
                'neobrutalist': '4px 4px 0 0 #111827',
                'neobrutalist-dark': '4px 4px 0 0 #F9FAFB',
            }
        },
    },
}
