import { NextResponse } from "next/server";

import { MongoClient } from "mongodb";

export async function GET(request) {


    const uri = "mongodb+srv://vimal123:vimal123@vimalmongodb.33wlujb.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        const database = client.db('nmcstock');
        const inventory = database.collection('inventory');

        const query = {};
        const allProducts = inventory.find().toArray();
        console.log(movie);
        return NextResponse.json({ allProducts })
    } finally {

        client.close();
    }

}

export async function POST(request) {

    let body = await request.json();
    console.log(body)
    const uri = "mongodb+srv://vimal123:vimal123@vimalmongodb.33wlujb.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        const database = client.db('nmcstock');
        const inventory = database.collection('inventory');

        const product = await inventory.insertOne(body)
        return NextResponse.json({ product, ok: true })

    } finally {

        client.close();
    }



}



