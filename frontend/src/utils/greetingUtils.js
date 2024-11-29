// src/utils/greetingUtils.js

export const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
        return 'Good Morning';
    } else if (hours < 18) {
        return 'Good Afternoon';
    } else {
        return 'Good Evening';
    }
};
