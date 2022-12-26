import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TabBar from './components/TabBar'
import { SystemIcon } from 'server-os-uikit';
import Calendar from './components/Calendar';

function App() {

    const [isCalendarTabActive, setIsCalendarTabActive] = useState(true);

    const onCloseTab = () => {
        setIsCalendarTabActive(prev => false)
    }
    const onOpenTabFromBar = () => {
        setIsCalendarTabActive(prev=>!prev)
    }

    return (
    <div className="App">
        <Header />
        <div>
        {
            isCalendarTabActive && <Calendar onClose={onCloseTab}/>
        }
        </div>
        <TabBar>
            <div onClick={onOpenTabFromBar}>
                <SystemIcon icon={'src\\assets\\calendar-icon.png'} />
            </div>
            <a href="https://github.com/egorkaBurkenya" target="_blank" rel="noopener noreferrer">
                <SystemIcon icon={'src\\assets\\github.png'} />
            </a>
            <a href="https://t.me/quietjourney" target="_blank" rel="noopener noreferrer">
                <SystemIcon icon={'src\\assets\\telegram.png'} />
            </a>
        </TabBar>
    </div>
    )
}

export default App
