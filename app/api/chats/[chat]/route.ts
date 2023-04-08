import { db } from "@/firebase"
import { addDoc, collection, doc, getDocs, query, setDoc, where, } from "firebase/firestore";
import { NextResponse } from 'next/server';
import askQuestion from "@/libs/gpt";

let chatId:string
let answer:string

export async function GET(request: Request) {
    // const q = query(collection(db, "chats"), where("id", "==", chatId));
    // const docSnap:any = await getDocs(q);
    // if (docSnap) {
    //     console.log(docSnap)
        
    //     return NextResponse.json(docSnap);
    // }else{
    //     return NextResponse.error()
    // }
    return NextResponse.json(answer);
}


export async function POST(request: Request) {

    const res = await request.json()
    chatId = res.id
    answer = await askQuestion(res.question)
    
    await setDoc(doc(db, "chats",res.id),{answer:answer,id:chatId});
    //console.log(answer);
    return NextResponse.json(answer);
}
