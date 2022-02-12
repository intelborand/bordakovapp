import { useEffect } from "react";

import SnakeApp from "./components/SnakeApp/SnakeApp";

export default function SnakePage() {

    useEffect(() => {
        document.title = 'Snake Page'
    })

    return (
        <>
        <SnakeApp />
        <style jsx>{`
            body {
              background: linear-gradient(to right, #9999ff, #ffff99);  
            }
        `}</style></>
    )
}