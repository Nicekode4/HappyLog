import React from 'react'

function NewHappy() {
    const emoji = [
        "😂",
        "😀",
        "🙂",
        "😐",
        "😟",
        "😢",
        "😫"
    ]
  return (
    <div>
        <h1>New happy</h1>
        {emoji.map((emote, index) => {
            console.log(emote);
            return <li key={index}>{emote}</li>
        })}
    </div>
  )
}

export default NewHappy