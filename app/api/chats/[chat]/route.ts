import { db } from "@/firebase"
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where, } from "firebase/firestore";
import { NextResponse } from 'next/server';
import askQuestion from "@/libs/gpt";

let chatId:string
let answer:string

export async function GET(request: Request) {

    const docRef = doc(db, "chats", chatId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data().answer);
        return NextResponse.json(docSnap.data().answer);
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        return NextResponse.error()
     }
    
}


export async function POST(request: Request) {

    const res = await request.json()
    chatId = res.id
    chatId = chatId.slice(1)
    answer = await askQuestion(res.question)
    
    await setDoc(doc(db, "chats",chatId),
                    {answer:answer,id:chatId,question:res.question});
    //console.log(answer);
    return NextResponse.json(answer);
}
