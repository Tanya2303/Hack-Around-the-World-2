import React from 'react'
import { FcSpeaker } from "react-icons/fc";
import Speech from 'react-speech';

const style = {
    container: {},
    text: {},
    buttons: {},
    play: {
        hover: {
            backgroundColor: 'GhostWhite'
        },
        button: {
            cursor: 'pointer',
            pointerEvents: 'none',
            outline: 'none',
            backgroundColor: 'Gainsboro',
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 6
        }
    },
    pause: {
        play: {},
        hover: {}
    },
    stop: {
        play: {
            hover: {},
            button: {}
        },
        resume: {
            play: {
                hover: {},
                button: {}
            }
        }
    }
}


export default function Translate() {


    return (
        <div>Home
            <div className='absolute'>
                <FcSpeaker className='h-8 w-8' />
            </div>
            <div className='relative h-6 w-6 pl-2'>
                <Speech text="नमस्ते" style={style} />
            </div>
        </div>
    )
}
