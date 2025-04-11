
interface ItemsProps {
        id: number;
        title: string;
        description: string;
        badges: { title: string }[];
}

export const toDos: ItemsProps[] = [
    {
        id: 1,
        title: "#boraCodar um Kanban 🧑‍💻",
        description: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
        badges: [
            { title: "rocketseat" },
            { title: "desafio" }
        ]
    },
    {
        id: 2,
        title: "Manter a ofensiva 🔥",
        description: "Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva.",
        badges: [
            { title: "rocketseat" }
        ]
    },
    {
        id: 3,
        title: "Almoçar 🥗",
        description: "Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço.",
        badges: [
            { title: "autocuidado" }
        ]
    }
]

export const doings: ItemsProps[] = [
    {
        id: 1,
        title: "Conferir o novo desafio 🚀",
        description: "Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível",
        badges: [
            { title: "rocketseat" },
            { title: "desafio" }
        ]
    },
    {
        id: 2,
        title: "Estudar ReactJS 📚",
        description: "Estudar mais sobre ReactJS, principalmente sobre hooks e context API.",
        badges: [
            { title: "rocketseat" },
            { title: "estudo" }
        ]
    }
]

export const dones: ItemsProps[] = [
    {
        id: 1,
        title: "#boraCodar uma página de login 🧑‍💻",
        description: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
        badges: [
            { title: "rocketseat" },
            { title: "desafio" }
        ]
    },
    {
        id: 2,
        title: "#boraCodar uma página de clima 🧑‍💻",
        description: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
        badges: [
            { title: "rocketseat" },
            { title: "desafio" }
        ]
    },
    {
        id: 3,
        title: "#boraCodar um conversor 🧑‍💻",
        description: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
        badges: [
            { title: "rocketseat" },
            { title: "desafio" }
        ]
    }
]