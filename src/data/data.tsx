import { MdContacts, MdExpandMore, MdOutlineDrafts, MdOutlineForwardToInbox, MdTaskAlt } from "react-icons/md"
import { FcCalendar } from "react-icons/fc"
import { TiLocationArrowOutline } from "react-icons/ti"
import { GrAdd } from "react-icons/gr"
import { SiGooglekeep } from "react-icons/si"
import { AiOutlineStar, AiOutlineClockCircle } from "react-icons/ai"

export const leftSideBarLink = [
    {
        name: "Input",
        icon: <MdOutlineForwardToInbox />
    },
    {
        name: "Starred",
        icon: <AiOutlineStar />
    },
    {
        name: "Snoozed",
        icon: <AiOutlineClockCircle />
    },
    {
        name: "Sent",
        icon: <TiLocationArrowOutline />
    },
    {
        name: "Draft",
        icon: <MdOutlineDrafts />
    },
    {
        name: "More",
        icon: <MdExpandMore />
    },
]

export const rigtSideBarLink = [
    {
        icon: <FcCalendar />
    },
    {
        icon: <SiGooglekeep />
    },
    {
        icon: <MdTaskAlt />
    },
    {
        icon: <MdContacts />
    },
    {
        icon: <GrAdd />
    }
] 