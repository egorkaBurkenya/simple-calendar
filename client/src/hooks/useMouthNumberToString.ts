export function useMouthNumberToString() {
    const converter = (number: number): string => {
        return [
            "January", "February", "March", 
            "April", "May", "June", 
            "July", "August", "September",
            "October", "November", "December"][number-1]
    }   
    return {converter}
}