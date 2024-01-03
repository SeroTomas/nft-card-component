import { UserInfoInterface } from "@/models"

const UserInfo = ({ avatar, userName }: UserInfoInterface) => {
    return (
        <div className="flex items-center gap-4 text-sm">
            <img src={avatar} alt="User avatar" />
            <p className="text-c-softBlue">
                Creation of <span className="text-white">{userName}</span>
            </p>
        </div>
    )
}
export default UserInfo