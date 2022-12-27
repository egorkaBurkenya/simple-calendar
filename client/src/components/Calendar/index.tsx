import React from 'react';

import Row from './Row';
import { BaseLayout } from 'server-os-uikit'
import { IBaseLayoutProps } from 'server-os-uikit/dist/UIKit/Layouts/BaseLayout';

import { useCalendarObject } from '../../hooks/useCalendarObject';
import { useMouthNumberToString } from '../../hooks/useMouthNumberToString';

import styles from './index.module.css';

interface ICalendarProps {
    onClose: IBaseLayoutProps["onClose"]
}

const Calendar: React.FC<ICalendarProps> = ({onClose}) => {

    const [year, _setYear] = React.useState(2022);
    const [month, _setMonth] = React.useState(12);

    const {converter} = useMouthNumberToString() 
    const dataArray = useCalendarObject(year, month)    
    
    const [isItemModalOpen, setIsItemModalOpen] = React.useState(false)

    const setYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        const year = parseInt(e.target.value)
        if (year > 9999 && year < 1000) _setYear(2022)
        else _setYear(year)
    }
    const setMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
        const month = parseInt(e.target.value)
        if (month > 12 && month < 1) _setMonth(12) 
        else _setMonth(month)
    }
    
    return (
        <div>
            <BaseLayout
                biggestValueOfTheLayer={{setValue: () => {}, value: 1}}
                draggable
                onClose={onClose}
                openPosition={{
                    x: 100,
                    y: 100
                }}
                scaling={false}
                size={{
                    height: '400px',
                    width: '700px'
                }}
                title="Simple Calendar 🧑🏻‍🎄"
            >
                <div className={styles.calendar}>
                    <div className={styles.choose_year_and_month}>
                        <div>
                            <input 
                                id="year" 
                                type="number" 
                                value={year} 
                                onChange={setYear} 
                            />
                            <input 
                                id="month" 
                                type="number" 
                                value={month} 
                                onChange={setMonth} 
                            />
                        </div>
                    </div>
                    <div className={styles.choose_date}>
                        <p>Year: {year}</p>
                        <p>Month: {converter(month)}</p>
                    </div>
                    <div className={styles.calendar__row_weeks}>
                        <div className={styles.item_w}>Mon</div>
                        <div className={styles.item_w}>Tu</div>
                        <div className={styles.item_w}>We</div>
                        <div className={styles.item_w}>Th</div>
                        <div className={styles.item_w}>Fr</div>
                        <div className={styles.item_w}>Sa</div>
                        <div className={styles.item_w}>Su</div>
                    </div>
                    {dataArray.map((i, index) => 
                        <Row 
                            key={index} 
                            rowDays={i} 
                            isItemModalOpen={isItemModalOpen} 
                            setIsItemModalOpen={setIsItemModalOpen}
                        /> 
                    )}
                </div>
            </BaseLayout>
        </div>
    );
};

export default Calendar;