import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Dropdown from "./Dropdown/Dropdown";
import languages from "../../../data/languages";

const Header = () => {
    const { t } = useTranslation();

    return (
        <div className="gpt3__navbar wow animate__animated animate__fadeInDown">
            <div className="gpt3__navbar-menu">
                <nav className={s.nav}>
                    <div className={`${s.item} ${s.active}`}>
                        <NavLink
                            to="/info"
                            className={({ isActive }) =>
                                isActive ? s.active : s.item
                            }
                        >
                            {t("home_page")}
                        </NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink
                            to="/list"
                            className={({ isActive }) =>
                                isActive ? s.active : s.item
                            }
                        >
                            {t("list_page")}
                        </NavLink>
                    </div>
                    <Dropdown languages={languages} />
                </nav>
            </div>
        </div>
    );
};

export default Header;
