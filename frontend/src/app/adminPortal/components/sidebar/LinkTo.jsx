import { NavLink } from "react-router-dom";
// import { Flex, useMediaQuery } from "@chakra-ui/react";

export const LinkTo = ({
  type,
  to,
  classname,
  iconComponent: I,
  title,
  toggle,
  isMobileScreen,
}) => {
  // const [isMobileScreen] = useMediaQuery("(max-width: 600px)");

  return (
    <NavLink
      activeStyle={{
        fontWeight: "bold",
        color: "#2A9D8F",
        background: "#EFEDF3",
        padding: "5px 5px 5px 30px",
        borderLeft: `5px solid #2a9d8f`,
        borderRadius: "5px",
      }}
      activeClassName="active"
      className={`${classname} link`}
      onClick={() => (isMobileScreen ? toggle() : null)}
      // target={title}
      to={to ? to : "/"}
    >
      {/* <Img src={iconComponent} alt="icon" /> */}
      <I />
      {title}
    </NavLink>
  );
};
