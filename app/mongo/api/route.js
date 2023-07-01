import { NextResponse } from "next/server";

import { MongoClient } from "mongodb";

export async function GET(request) {


    const uri = "mongodb+srv://vimal123:vimal123@vimalmongodb.33wlujb.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        const database = client.db('stock');
        const movies = database.collection('stock');

        const query = {};
        const movie = movies.findOne(query);
        console.log(movie);
        return NextResponse.json({ 'a': 34 }, movie)
    } finally {

        client.close();
    }



}



