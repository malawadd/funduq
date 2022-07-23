# sawti
 a hackfs project 

Sawti is a web3-enabled audio hosting solution powered by IPFS.

## Features

- Uses IPFS to store all audio files
- Allows users turn audios into NFT, minted using NFTPORT.
- NFT images are generated using deepai

## Tech

Safree uses a number of open source projects to work properly:

- [NextJS](https://nextjs.org/) - HTML enhanced for web apps!
- [IPFS](https://ipfs.io/) - Cutting edge decentralized storage network protocol..
- [NFTPORT](https://livepeer.studio/) - The Stripe for NFTs
- [Ethers](https://docs.ethers.io/v5/) - interacting with the Ethereum Blockchain and its ecosystem.
- [deepai](https://deepai.org/machine-learning-model/text2img) - easy text to image generation
- [robohash](https://robohash.org/) - A great Avatar library
- [tailwind](https://tailwindcss.com/) - needs no introduction 


## Installation

Before installation make sure you have access to deepai api, in addition to nftport api.
- [Getting-started with deepai](https://deepai.org/machine-learning-model/text2img)
- [NFTport Authentication](https://docs.nftport.xyz/docs/nftport/ZG9jOjY2NzI4NTgz-authentication)


Install the dependencies and devDependencies

```sh
cd sawti
npm i
```
create .env file and fill it

```sh
cp .env-example ~/.env
```

start the server.
 ```sh
npm run dev
```