import { UserRole, UserStatus } from "@/utils/enums"
import { Schema, Document, model, models } from "mongoose"

export interface IUser extends Document {
    clerkId: string
    name: string
    username: string
    email_address: string
    avatar: string
    jobs: Schema.Types.ObjectId[]
    status: UserStatus
    role: UserRole
    createdAt: Date
}
const userSchema = new Schema<IUser>({
    clerkId: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    username:{
        type: String,
        unique: true,
        required: true
    },
    email_address:{
        type: String,
        unique: true,
        required: true
    },
    avatar:{
        type: String,
    },
    jobs: [{
        type: Schema.Types.ObjectId,
        ref: "Job"
    }],
    createdAt:{
        type: Date,
        default: Date.now
    },
    status:{
        type: String,
        enum: Object.values(UserStatus),
        default: UserStatus. ACTIVE
    },
    role:{
        type: String,
        enum: Object.values(UserRole),
        default: UserRole.USER
    }

})
const User = models.User || model("User", userSchema)
export default User;