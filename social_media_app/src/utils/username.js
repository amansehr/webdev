const adjectives = [
    'boundless',
    'plausible',
    'sleepy',
    'electronic',
    'dangerous',
    'slim',
    'purple'
]

const objects = [
    'puddle',
    'piano',
    'window',
    'bowl',
    'socks',
    'brocolli',
    'chalk'
]

function genrandomusername() {
    const adj = adjectives[Math.floor(Math.random() * 7)]
    const obj = objects[Math.floor(Math.random() * 7)]

    return `${adj}-${obj}`
}

module.exports = {
    genrandomusername
}