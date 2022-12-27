import {useState} from 'react';

export function useAddNewTask(fullDayPath: string) {
    const addTask = (task: string) => {
        fetch(
            `http://localhost:5000/add_new_task_to_day`,
            {   
                method: "POST",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:5000',
                    'Access-Control-Allow-Credentials': 'true'
                },
                body: JSON.stringify({fullDayPath, task})
        }
            ).then(response => response.json()).then(
            response => {
            alert(
                `Task was successfully added ✅✅✅\n\n${response.tasks_list.join("\n")}`
                )
        })
    }
    return {addTask}
}