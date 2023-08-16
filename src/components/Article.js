import React from "react";

function Icons(num, icon){
    let length = ""
    for(let i = 0; i < num; i++){
        length = length+icon;
    }

    return length;
}


function Article({title, date="January 1, 1970", preview, minutes}){
    console.log(minutes);
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            {minutes<30 ? <p>{Icons(Math.round(minutes/5), "☕️")} {minutes} minute read</p> 
            
            : <p>{Icons(Math.round(minutes/10), "🍱")} {minutes} minute read</p>}
        </article>
    )
}

export default Article;