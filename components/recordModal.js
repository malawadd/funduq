import React from 'react'
import MicRecorder from 'mic-recorder-to-mp3';
import toast, { Toaster } from 'react-hot-toast';
import { create as ipfsHttpClient } from 'ipfs-http-client'

const Recoder = new MicRecorder({ bitRate: 128 });
const client = ipfsHttpClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

class RecordModal extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isRecording: false,
            blobURL: '',
            isBlocked: false,
            playPause:'/record.svg',
            isOpen:false,
            name:"",
            category:"tech",
            file:"",
            data:null,
          };
    }

    start = ()=>{
        navigator.mediaDevices.getUserMedia({ audio: true },
        ()=>{
            console.log('permission Granted')
            this.setState({isBlocked:false})
        },
        ()=>{
            console.log('permission Denied')
            this.setState({isBlocked:true})
        },
        );

        if (this.state.isBlocked) {
            console.log("Permission Denied");
        } else {

            Mp3Recorder
            .start()
            .then(() => {
                this.recordingStarted();
                this.setState({isRecording:true, playPause:'/pause.svg'})
            }).catch((e) => console.log(e));
        }
    }



    

    

}

export default RecordModal