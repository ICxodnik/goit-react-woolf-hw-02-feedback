export const Votes = {
    good: 'good',
    neutral: 'neutral',
    bad: 'bad',
};

const VoteName = {
    good: 'Good',
    neutral: 'Neutral',
    bad: 'Bad',
}

export function voteName(vote) {
    return VoteName[vote];
}