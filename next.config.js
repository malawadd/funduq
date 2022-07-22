/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  env :{
    NEXT_MNENOMIC: process.env.MNENOMIC,
    NEXT_MUMBAI: process.env.MUMBAI,
  }}
