/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test'
        PUBLIC_URL: string
    }
}

declare module '*.bmp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    const src: string;
    export default src;
}
