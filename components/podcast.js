import React, { useEffect,useContext, useState } from 'react'
import { useRef } from 'react';
import { AudioHandler } from '../pages/dashboard';
import { Config } from '../pages/_app';
import { create as ipfsHttpClient } from 'ipfs-http-client'

const client = ipfsHttpClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

function Podcast(props){

}

export default Podcast