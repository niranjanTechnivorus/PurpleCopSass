import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link, usePage } from "@inertiajs/react";
//import images
import avatar1 from "../../../images/users/user-dummy-img.jpg";

const ProfileDropdown = () => {
  const user = usePage().props.auth.user;
  const userRoles = usePage().props.auth.roles;
  const profilePic = usePage().props.auth.profilePic;
  //Dropdown Toggle
  const [isProfileDropdown, setIsProfileDropdown] = useState<boolean>(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };

  // console.log("profile", user);
  return (
    <React.Fragment>
      {user && (
        <Dropdown
          show={isProfileDropdown}
          onClick={toggleProfileDropdown}
          className="ms-sm-3 header-item topbar-user"
        >
          <Dropdown.Toggle as="button" type="button" className="arrow-none btn">
            <span className="d-flex align-items-center">
              <img
                className="rounded-circle header-profile-user"
                src={profilePic ? profilePic : avatar1}
                alt=""
              />
              <span className="text-start ms-xl-2">
                <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                  {user && user.name}
                </span>
                <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">
                  {userRoles}
                </span>
              </span>
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-end">
            <h6 className="dropdown-header">Welcome {user.name}!</h6>

            <Dropdown.Item
              href={route("profile.edit")}
              className="dropdown-item"
            >
              <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
              <span className="align-middle">Edit Profile</span>
            </Dropdown.Item>

            {/* <Link
              className="dropdown-item"
              as="button"
              href={route("user.edit", user.id)}
            >
              <i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i>{" "}
              <span className="align-middle" data-key="t-logout">
                Setting
              </span>
            </Link> */}
            <Link
              className="dropdown-item"
              as="button"
              method="post"
              href={route("logout")}
            >
              <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>{" "}
              <span className="align-middle" data-key="t-logout">
                Logout
              </span>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </React.Fragment>
  );
};

export default ProfileDropdown;
