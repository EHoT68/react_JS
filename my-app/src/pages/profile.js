import { useDispatch, useSelector } from "react-redux";
import { toggleShowProfile, profileSelector } from "../store/profile";
import { ListItemIcon } from "@mui/material";
import { AccountCircle, HighlightOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./profile.css";

export function ProfilePage(props) {

   const { firstName, lastName, age, isVisibleProfile } =
      useSelector(profileSelector);

   const dispatch = useDispatch();

   return (
      <div className={"profile-box"}>
         <div className={"App"}>
            <Link className={"close-prof"} to="/chat">
               <ListItemIcon>
                  <HighlightOff className={"icon"} />
               </ListItemIcon>
            </Link>
            <ListItemIcon>
               <AccountCircle fontSize="large" className={"icon"} />
            </ListItemIcon>
            <br />
            <button className={"but-prof"} onClick={() => dispatch(toggleShowProfile())}>
               Шторка
            </button>

            {isVisibleProfile && (
               <>
                  <h1 className={"prof-text"}>Имя: {firstName}</h1>
                  <h1 className={"prof-text"}>Фамилия: {lastName}</h1>
                  <h1 className={"prof-text"}>Возраст: {age}</h1>
               </>
            )}
         </div>
      </div>
   );
}
