"use server"
import User, { IUser } from "@/database/user.model"
import { connectToDatabase } from "../mongoose"
import {TCreateUserParams} from "@/utils/types"
export default async function createUser(params: TCreateUserParams){
    
    try{
        connectToDatabase()
        const newUser = await User.create(params)
        return newUser
    }catch(error){
        
    }

}
