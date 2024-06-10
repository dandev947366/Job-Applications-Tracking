import { UserRole, UserStatus } from "@/utils/enums"
import { Schema, Document, model, models } from "mongoose"

interface User extends Document {
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
const userSchema = new Schema<User>({
    clerkId: {
        type: String,
    },
    name: {
        type: String,
    },
    username:{
        type: String,
    },
    email_address:{
        type: String,
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