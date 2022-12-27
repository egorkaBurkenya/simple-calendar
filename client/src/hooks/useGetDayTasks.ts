import {useState} from 'react';

export function useGetDayTasks(fullDayPath: string) {

    const [tasks, setTasks] = useState([]);

    const getTasks = () => {
        if (fullDayPath === 'none') {
            setTasks(prev => [])
        } else {
            const day = fullDayPath.split("/")[0]
            const mouth = fullDayPath.split("/")[1]
            const year = fullDayPath.split("/")[2]
            fetch(
                `http://localhost:5000/get_day_task_list?day=${day}&mouth=${mouth}&year=${year}`,
                {
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': 'http://localhost:5000',
                        'Access-Control-Allow-Credentials': 'true'
                    }
            }
                ).then(response => response.json()).then(
                response => {
                if (response.status == false) {
                    setTasks(prev => [])
                } else {
                    setTasks(prev => response.tasks_list)
                }
            })
        }
    }

    return {tasks, getTasks}
}