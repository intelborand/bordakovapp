import SnakeApp from "./components/SnakeApp/SnakeApp";

export default function SnakePage() {
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