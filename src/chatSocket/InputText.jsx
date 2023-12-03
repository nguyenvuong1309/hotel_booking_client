import React, { useState } from 'react'



const styles = {
    button: {
        width: '100%',
        height: 50,
        fontWeight: 'bold',
        borderRadius: 10,
        fontSize: 18,
        backgroundColor: '#34b7f1',
        borderWidth: 0,
        color: '#fff'
    },
    textarea: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderWidth: 0,
        padding: 10,
        fontSize: 18
    },
    textContainer: {
        display: "flex",
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
}

export default function InputText({ addMessage }) {

    const [message, setMessage] = useState('')

    function addAMessage() {
        addMessage({
            message
        })
        setMessage('')
    }

    return (
        <div
            // style={styles.textContainer}
            className="flex justify-around mt-5
            max-[500px]:grid
            max-[500px]:grid-cols-1
            max-[500px]:justify-center
            ">

            <div className='w-9/12 justify-center
            max-[500px]:w-full
            max-[500px]:flex
            max-[500px]:justify-center
            '>
                <div className='flex w-full 
                 max-[500px]:w-11/12
                '>
                    <textarea
                        className='max-[500px]:justify-center  max-[500px]:flex w-full'
                        style={styles.textarea}
                        rows={6}
                        placeholder="Write something..."
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                // Prevent the default behavior (newline in textarea)
                                event.preventDefault();

                                // Call your custom function here
                                addMessage(message);
                                setMessage("");
                            }
                        }}
                    />
                </div>
            </div>


            <div className='w-2/12
              max-[500px]:w-full
              max-[500px]:flex
              max-[500px]:justify-center
            '>
                <div className='w-full
                max-[500px]:w-4/12
                '>
                    <button
                        className='max-[500px]:justify-center'
                        onClick={() => addAMessage()}
                        style={styles.button}
                    >
                        ENTER
                    </button>
                </div>
            </div>

        </div>
    )
}