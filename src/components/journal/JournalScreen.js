import React from 'react'
import Sidebar from './Sidebar'
import NothingSelected from './NothingSelected'
import NoteScreen from '../notes/NoteScreen'

const JournalScreen = () => {

    return (
        <div className="journal__main-content">

            <Sidebar />

            <main>
                
                {/* <NothingSelected /> */}
                <NoteScreen />
                
            </main>

        </div>
    )
}

export default JournalScreen
