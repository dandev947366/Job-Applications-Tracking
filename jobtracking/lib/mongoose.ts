"use server"

import mongoose from 'mongoose'
export const connectToDatabase = async () =>{

    //singleton
    let isConnected:boolean = false
    if(!process.env.MONGODB_URL){
        throw new Error("MONGODB_URL is not set")
    }
    
    if(isConnected){
        console.log("MONGODB is connected")
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "jobtracking",
            
        
        })
        isConnected=true
        console.log("Using new database connection")
    }catch(error){
        console.log("Error while connecting to database")
    }
}