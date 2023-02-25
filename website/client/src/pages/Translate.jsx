import React, { useState } from 'react';
import { createWorker } from 'tesseract.js';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import 'filepond/dist/filepond.min.css';
import { FcSpeaker } from "react-icons/fc";
import Speech from 'react-speech';

registerPlugin(FilePondPluginImagePreview);

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

class Translate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isProcessing: false,
            ocrText: '',
            pctg: '0.00'
        }
        this.pond = React.createRef();
        this.worker = React.createRef();
        this.updateProgressAndLog = this.updateProgressAndLog.bind(this);
    }


    async doOCR(file) {
        this.setState({
            isProcessing: true,
            ocrText: '',
            pctg: '0.00'
        })
        await this.worker.load();
        await this.worker.loadLanguage('eng');
        await this.worker.initialize('eng');
        const { data: { text } } = await this.worker.recognize(file.file);
        this.setState({
            isProcessing: false,
            ocrText: text
        })
    };
    updateProgressAndLog(m) {
        var MAX_PARCENTAGE = 1;
        var DECIMAL_COUNT = 2;

        if (m.status === "recognizing text") {
            var pctg = (m.progress / MAX_PARCENTAGE) * 100
            this.setState({
                pctg: pctg.toFixed(DECIMAL_COUNT)
            })

        }
    }
    componentDidMount() {
        this.worker = createWorker({
            logger: m => this.updateProgressAndLog(m),
        });

    }


    render() {
        return (
            <div className="">
                <div className='text-center text-6xl font-base text-white py-6'>Translate</div>

                <div className="">
                    <div className="grid place-items-center">
                        <div className="w-96">
                            <FilePond ref={ref => this.pond = ref}
                                onaddfile={(err, file) => {
                                    this.doOCR(file);

                                }}
                                onremovefile={(err, fiile) => {
                                    this.setState({
                                        ocrText: ''
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <div className="">
                        <div class="grid place-items-center py-8">
                            <textarea
                                rows="10"
                                value={this.state.ocrText}
                                // onChange={(e) => setValue(e.target.value)}
                                className="w-[46rem] p-2 rounded-lg border-none active:border-none resize-none h-full text-xl"
                            ></textarea>

                            <div className='-mt-16 -ml-[42rem]'>
                                <FcSpeaker className='h-8 w-8' />
                                <div className='h-6 w-6 pl-2 -mt-8'>
                                    <Speech text="नमस्ते" style={style} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Translate;
