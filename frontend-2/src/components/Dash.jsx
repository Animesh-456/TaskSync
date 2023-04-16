import { useAtom, useAtomValue } from "jotai"
import storage from "../jotai/atom"
const Dash = () => {
    const user = useAtom(storage.user)
    return (
        <h1>{user}</h1>
    )
}

export default Dash