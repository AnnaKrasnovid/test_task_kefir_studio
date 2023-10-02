interface OptionInt {
    hour12?: boolean,
    weekday?: "long" | "short" | "narrow" | undefined,
    year?: "numeric" | "2-digit" | undefined,
    month?: "long" | "short" | "narrow" | "numeric" | "2-digit" | undefined,
    day?: "numeric" | "2-digit" | undefined,
    hour?: "numeric" | "2-digit" | undefined,
    minute?: "numeric" | "2-digit" | undefined,
    second?: "numeric" | "2-digit" | undefined,
    timeZoneName?: "long" | "short" | "shortOffset" | "longOffset" | "shortGeneric" | "longGeneric" | undefined,
}

const options: OptionInt = {
    hour12: false,
    year: 'numeric',
    month: 'numeric',
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
}

export function subtractHours(date: Date, numOfHours: number) {
    const dateCopy = new Date(date.getTime());

    dateCopy.setHours(dateCopy.getHours() - numOfHours);

    return dateCopy;
}

export function getDateFormat(dateComment: string) {
    let date = new Date(Date.parse(dateComment));
    // console.log(Date.parse(dateComment))
    const RuDate = new Intl.DateTimeFormat('ru', options);
    return RuDate.format(date);
}

export function getDiffHours(dateComment: string) {
    const timeStart = new Date(dateComment).getTime();
    const timeEnd = new Date().getTime();
    const diffHrs = Math.floor(((timeEnd - timeStart) % 86400000) / 3600000);
    return diffHrs;
}