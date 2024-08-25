import "../assets/styles/navbar.css";
import Dropdown from "./Dropdown";
import logo from "../images/logoSP.png";
import placeholder from "../images/placeholder.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
   return (
      <div className="navbar">
         <div className="navbar--leftSide">
            <NavLink className="navbar--imageLink" to="/">
               <img className="navbar--image" src={logo} />
            </NavLink>
            <h2 className="navbar--mainText">생명샘 장로교회</h2>
         </div>

         <div className="navbar--rightSide">
            <NavLink className="active-link" to="/">
               홈
            </NavLink>
            <Dropdown
               dropdownName="교회 안내"
               dropdownLink="n/a"
               linkData={[
                  {
                     linkName: "교회 소식",
                     routerLink: "/news",
                  },
                  {
                     linkName: "목회 철학",
                     routerLink: "/",
                  },
               ]}
            />
            <Dropdown
               dropdownName="설교"
               dropdownLink="/sermon"
               linkData={[
                  {
                     linkName: "주일 설교",
                     routerLink: "/sunday-sermon",
                  },
                  {
                     linkName: "기타 설교",
                     routerLink: "/other-sermon",
                  },
                  {
                     linkName: "에베소서 강해",
                     routerLink: "/wednesday-sermon",
                  },
               ]}
            />
            <NavLink to="/daily-bible">매일성경</NavLink>
            <NavLink to="/pastor-park-column">박화신 목사 컬럼</NavLink>
            <Dropdown
               dropdownName="갤러리"
               linkNames={["동영상들", "최근 사진들", "보관된 오랜 사진들"]}
            />
         </div>
      </div>
   );
}
