export const Options = {
    good: 'good',
    neutral: 'neutral',
    bad: 'bad',
};

const OptionsName = {
    good: 'Good',
    neutral: 'Neutral',
    bad: 'Bad',
}

export function getOptionName(option) {
    return OptionsName[option];
}