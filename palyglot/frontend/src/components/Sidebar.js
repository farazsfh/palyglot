import React from "react";
import "../css/Sidebar.css";
import { SearchOutlined } from "@material-ui/icons";
import SidebarRoom from "./SidebarRoom"

function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                {/* <Avatar src = "https://vignette.wikia.nocookie.net/emojimovie/images/5/56/Poop.png/revision/latest?cb=20170726175404"/> */}
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search for Pal" type="text" disabled />
                </div>
            </div>
            <div className="sidebar_rooms">
                {props.rooms.map((room, i) => {
                    return (
                        <SidebarRoom key={i} room={room} onChangeRoom={props.onChangeRoom}
                            userId={props.currentUser} />
                    )
                })}
            </div>
        </div>
    );
}

export default Sidebar;