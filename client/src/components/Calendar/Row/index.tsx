import React from 'react';
import Day from '../Day';

import { iDayProps } from '../Day';

import styles from '../index.module.css';

interface IRowProps {
    rowDays: {dayNumber: number, fullDayPath: string}[];
    isItemModalOpen: iDayProps["isItemModalOpen"]
    setIsItemModalOpen: iDayProps["setIsItemModalOpen"]
}

const Row: React.FC<IRowProps> = ({rowDays, isItemModalOpen, setIsItemModalOpen}) => {
    return (
        <div className={styles.calendar__row}>
            {
                rowDays.map((i, index) => 
                    <Day
                        key={index} 
                        isItemModalOpen={isItemModalOpen}
                        setIsItemModalOpen={setIsItemModalOpen}
                        children={i.dayNumber} 
                        fullDayPath={i.fullDayPath} 
                    />
                )
            }
        </div>
    );
};

export default Row;