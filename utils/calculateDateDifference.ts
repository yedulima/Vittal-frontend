import {parse, differenceInDays} from "date-fns";

export const calculateDateDifference = (start: string, end: string) => {
    const dateFormat = "dd/MM/yyyy";

    const startDate = parse(start, dateFormat, new Date());
    const endDate = parse(end, dateFormat, new Date());

    const daysDifference = differenceInDays(endDate, startDate);
    return daysDifference;
}