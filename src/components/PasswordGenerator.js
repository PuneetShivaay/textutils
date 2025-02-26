import { React, useState, useCallback, useEffect, useRef } from "react"

export default function PasswordGenerator(props) {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")

    //useRef Hook
    const passRef = useRef(null)

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*_+={}[]~'"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)

    }, [length, numberAllowed, charAllowed, setPassword])

    const copyPassToClipBoard = useCallback(() => {
        passRef.current?.select()
        passRef.current?.setSelectionRange(0, 100) //if want select some limited values
        window.navigator.clipboard.writeText(password)


    }, [password]

    )


    useEffect(() => { passwordGenerator() }, [length, numberAllowed, charAllowed, passwordGenerator])
    return (
        <>
            <div class="row align-items-start">
                <h1>"Password Generator" </h1>
                <p>Here you can generate Password with miniumum limit of 6 Character to maximum limit of 100 Characters. You can inlcude or exclude Number or Speacial Character using checkbox icons</p>
                <div className="row">
                    <div className="col">
                        <input type="text" class="form-control input-lg" value={password} placeholder="Password" readOnly ref={passRef} rows="8" />

                    </div>

                </div>

                <div className="row">
                    <div className="col-sm">
                        <input type="range" min={6} max={100} value={length} id="rangeInput" onChange={(e) => { setLength(e.target.value) }} />
                        <label htmlFor="rangeInput">Length: {length}</label>
                    </div>
                    <div className="col-sm">
                        <input type="checkbox" defaultChecked={numberAllowed} id="numberinput" onChange={() => {
                            setNumberAllowed((prev) => !prev)
                        }} />
                        <label htmlFor="numberinput">Include Numbers</label>
                    </div>
                    <div className="col-sm">
                        <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={() => {
                            setCharAllowed((prev) => !prev)
                        }} />
                        <label htmlFor="charInput">Include Characters</label>
                    </div>
                </div>
                <div className="container">

                    <button className="btn btn-primary mx-1" onClick={copyPassToClipBoard}>Copy Generated Password</button>

                </div>
            </div>
        </>
    )
}