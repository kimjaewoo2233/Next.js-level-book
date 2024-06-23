import { Boundary } from "./boundary";


export default function Template({ children }: { children: React.ReactNode }){
    return <Boundary>{children}</Boundary>
}