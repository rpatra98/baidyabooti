import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let data = []
    try {
        await mongoose.connect(connectionSrt);
        data = await Product.find();
    } catch (error) {
        data = { success: false }
    }
    return NextResponse.json({ result: data, success: true })
}

export async function POST(request) {
    try{
        const payload = await request.json();
        console.log('Received payload', payload);
        await mongoose.connect(connectionSrt);
        let product = new Product(payload);
        const result = await product.save();
        return NextResponse.json({ result, success: true });
    } catch (error) {
        return NextResponse.json({success: false, error: error.message})
    }
}

// export async function GET(){
//     let data = [];
//     let success = true;
//     try {
//         await mongoose.connect(connectionSrt);
//         data = await Product.find();
//     } catch (error) {
//         data = {result:"error"}
//         success = false
//     }
//     return NextResponse.json({result:data, success})
// }
// export function GET(request) {
    //     return NextResponse.json({name:"Anil", age:28, city:'noida'})
    // }