/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true,
        domains: ["res.cloudinary.com"],
    },
    
}

module.exports = nextConfig

// module.exports = {
//     async headers() {
//         return [
//             {
//                 source: '/api/auth/session',
//                 headers: [
//                     {
//                         key: 'Content-Security-Policy',
//                         value: "script-src 'self' https://apis.google.com; connect-src 'self' https://apis.google.com",
//                     },
//                 ],
//             },
//         ];
//     },
// };



