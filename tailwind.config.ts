import type {Config} from 'tailwindcss';

const config: Config= {
    content:[
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
     ],
    theme:{
        extend:{
            colors:{
                Cblack:"#1B1212",
                Cblack2 : '#28282B',
                
            },
        },
    },
    plugins:[],
}
export default config; // ✅ this must be here