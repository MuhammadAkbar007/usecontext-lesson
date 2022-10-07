import {myContext} from '../App'
import {useContext} from 'react'

function ThirdComponent() {

    const text = useContext(myContext)

    return <div>
            <h1>Hello {text}</h1>
        </div>
}

export default ThirdComponent