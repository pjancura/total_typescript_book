interface Scores {
 math: number;
 english: number;
 science: number;
}

interface ExtendedScores extends Scores {
    [index: string]: number;
}

const scores: ExtendedScores = {
    math: 95,
    english: 85,
    science: 90,
}

scores.gym = 50
scores.music = 100
scores.history = 93

