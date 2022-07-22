import React from 'react'
import MicRecorder from 'mic-recorder-to-mp3';
import toast, { Toaster } from 'react-hot-toast';
import { create as ipfsHttpClient } from 'ipfs-http-client'

const Recoder = new MicRecorder({ bitRate: 128 });
const client = ipfsHttpClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

class RecordModal extends React.Component{

    

    

}

export default RecordModal