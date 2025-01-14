export const fadeInFromRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.25,
            ease: "easeOut",
            staggerChildren: 0.5,
        },
    },
};

export const fadeInFromRightChildVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
        },
    },
};