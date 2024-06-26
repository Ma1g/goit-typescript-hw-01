enum DayOfWeek {
    Monday,
    Tuesday,
    Wednestday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const isWeekend = (day: DayOfWeek): boolean => {
    if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
        return true;
    } else {
        return false;
    }
}

console.log(isWeekend(DayOfWeek.Monday))