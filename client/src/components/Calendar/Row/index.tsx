import React from 'react';
import styles from '../index.module.css';
import Day from '../Day';

interface IRowProps {
    rowDays: {dayNumber: number, fullDayPath: string}[];
}

const Row: React.FC<IRowProps> = ({rowDays}) => {
    return (
        <div className={styles.calendar__row}>
            {rowDays.map((i, index) => <Day key={index} children={i.dayNumber} fullDayPath={i.fullDayPath} />)}
        </div>
    );
};

export default Row;