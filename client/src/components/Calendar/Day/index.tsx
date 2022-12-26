import React from 'react';
import styles from  '../index.module.css';
import { useGetDayTasksCount } from '../../../hooks/useGetDayTasksCount';
import {ExtraModal} from 'server-os-uikit';

interface iDayProps {
    children: number | string;
    fullDayPath: string;
}

const Day: React.FC<iDayProps> = ({children, fullDayPath}) => {

    const [isModalOpen, setIsModalOpen] = React.useState(false)

    const tasks_count = useGetDayTasksCount(fullDayPath);

    return (
        <div 
            onClick={() => setIsModalOpen(prev=>!prev)}
            className={styles.item} 
            style={{cursor: children != 0 ? "pointer" : "default"}}
            >
            {tasks_count > 0 && <p>{tasks_count}</p>}
            {children != 0 ? children : <div />}
            {/* {isModalOpen && <ExtraModal 
                width={100}
                className={styles.day_modal} 
                items={
                [
                    {
                        type: "item", 
                        options: {
                            children: "NewTask", 
                            onClick: () => {alert("add new task")
                        }}},
                    {
                        type: "item", 
                        options: {
                            children: "Task List", 
                            onClick: () => {alert("Task List")
                        }}},
                ]
            }/>} */}
        </div>
    );
};

export default Day;