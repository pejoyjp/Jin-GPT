import { db } from '@/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { NextResponse } from 'next/server';

let Chatsid:string 

export async function GET() {
    const data = await addDoc(collection(db, "chats"),{});
    Chatsid = data.id
    return NextResponse.json(data.id);
}
// export async function get() {
//     return NextResponse.json(Chatsid);
// }
