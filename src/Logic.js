function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Ejemplo de uso
const min = 0;
const max = 17;
export const randomNumber = getRandomInt(min, max);

