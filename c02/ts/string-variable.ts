let user_name:string;
let message:string;
user_name = "史嘉蕾"
message = "hush";

let name_span=document.getElementById('name') as HTMLElement
let note_div=document.getElementById("note") as HTMLElement

name_span.innerText=user_name;
note_div.innerText=message;