import { getDateFormat, getDiffHours } from './date';

export function getHoursFormat(hours: number) {
    if (hours === 1) {
        return 'час';
    } else if (hours > 1 && hours < 5) {
        return 'часа';
    }
}

export function getDateText(dateComment: string) {
    const hours = getDiffHours(dateComment)

    if (hours < 4) {
        return `${hours} ${getHoursFormat(hours)} назад`
    } else {
        return getDateFormat(dateComment)
    }
}

export function getTextComments(num: number) {
    const number = num % 10;

    if (num === 1 || number === 1) {
        return 'комментарий';
    } else if (num > 1 && num < 5) {
        return 'комментария';
    } else if (num > 4 && num <= 20) {
        return 'комментариев';
    } else if (number >= 1 && number < 5) {
        return 'комментария';
    } else if ((number > 4 && number <= 9) || number === 0) {
        return 'комментариев';
    }
}