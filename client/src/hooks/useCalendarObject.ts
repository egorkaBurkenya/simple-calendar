export function useCalendarObject(year: number, month: number): {dayNumber: number, fullDayPath: string}[][] {

    function createCalendar(year: number, month: number): {dayNumber: number, fullDayPath: string}[][] {

        let mon = month - 1;
        let d = new Date(year, mon);

        let table_array: {dayNumber: number, fullDayPath: string}[][] = [[], [], [], [], []];
        let row = 0;

        for (let i = 0; i < getDay(d); i++) {
            table_array[row].push({dayNumber: 0, fullDayPath: `none`})
        }
        while (d.getMonth() == mon) {
            try {
                table_array[row].push({dayNumber: d.getDate(), fullDayPath: `${d.getDate()}/${month}/${year}`})
            } catch (error) {
                table_array.push([])
                table_array[row].push({dayNumber: d.getDate(), fullDayPath: `${d.getDate()}/${month}/${year}`})
            }
            if (getDay(d) % 7 == 6) {row += 1}
            d.setDate(d.getDate() + 1);
            }

        if (getDay(d) != 0) {
            for (let i = getDay(d); i < 7; i++) {
                table_array[row].push({dayNumber: 0, fullDayPath: `none`})
                }
            }

        return table_array
        }

        function getDay(date: Date) { 
            let day = date.getDay();
            if (day == 0) day = 7;
            return day - 1;
        }
    return createCalendar(year, month);
}