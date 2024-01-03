import { UserInfoInterface } from "@/models"

const UserInfo = ({ avatar, userName }: UserInfoInterface) => {
    return (
        <div className="flex items-center gap-4 text-sm">
            <img src={avatar} alt="User avatar" className="h-9 border rounded-full"/>
            <p className="text-c-softBlue tracking-wide">
                Creation of <span className="text-white hover:cursor-pointer hover:text-c-cyan transition duration-150">{userName}</span>
            </p>
        </div>
    )
}
export default UserInfo