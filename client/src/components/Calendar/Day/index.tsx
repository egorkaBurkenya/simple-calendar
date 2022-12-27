import React from 'react';

import { ExtraModal } from 'server-os-uikit';

import { useGetDayTasks } from '../../../hooks/useGetDayTasks';
import { useAddNewTask } from '../../../hooks/useAddNewTask';

import styles from  '../index.module.css';

export interface iDayProps {
    children: number | string;
    fullDayPath: string;
    isItemModalOpen: boolean;
    setIsItemModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Day: React.FC<iDayProps> = ({children, fullDayPath, isItemModalOpen, setIsItemModalOpen}) => {

    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const { tasks, getTasks } = useGetDayTasks(fullDayPath);
    const { addTask } = useAddNewTask(fullDayPath)

    const onClick = () => {        
        if (isModalOpen) {
            setIsItemModalOpen(prev => false)
            setIsModalOpen(prev=>false)
        } else if (isItemModalOpen == false) {
            getTasks()
            setIsItemModalOpen(prev => true)
            setIsModalOpen(prev=>true)
        }
    }

    const show_tasks_list = () => {
        // ! Костыль, что бы не тратить много времени
        if (tasks.length != 0) {
            alert(tasks.join("\n"))
        }
    }

    const add_new_task_to_day_list = () => {
        // ! Костыль, что бы не тратить много времени
        const task = prompt(`Enter new task to ${fullDayPath} day`, "finish test task!!!")
        // console.log(task);
        addTask(task!)
    }


    return (
        <div 
            onClick={onClick}
            className={styles.item} 
            style={{cursor: children != 0 ? "pointer" : "default"}}
            >
            {children != 0 ? children : <div />}
            {isModalOpen && isItemModalOpen && <ExtraModal 
                width={100}
                className={styles.day_modal} 
                items={
                    [
                        {
                            type: "item", 
                            options: {
                                children: "New Task", 
                                onClick: add_new_task_to_day_list
                            }},
                        {
                            type: "line"
                        },
                        {
                            type: "item", 
                            options: {
                                children: "Task List", 
                                onClick: show_tasks_list
                            }},
                    ]
                }
                />}
        </div>
    );
};

export default Day;