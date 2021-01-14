import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
    return (
        <div className="notes__main-content" >
            <NotesAppBar />

            <div className="notes__content">
                <input type="text" placeholder="Some awesome title" className="notes__title-input" autoComplete="off"/>
            </div>

            <textarea placeholder="What happened today" className="notes__textarea"></textarea>

            <div className="notes__image">
                <img src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg" alt="image"/>
            </div>
        </div>
    )
}

export default NoteScreen
