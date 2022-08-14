import { LinkTo } from "./LinkTo";
import "./index.css";
import { ADMIN_NAV_ITEMS } from "./sidebar.constatnt";

const SideBar = ({ toggle }) => {
  return (
    <div
      style={{  background: "#EFEDF3", marginTop: "" }}
     
    >
      <div className="sidebar">
        <div className="sidebar-inner">
          <div style={{ dispay: "flex", flexDirection: "column" }}>
            {ADMIN_NAV_ITEMS?.map(({ title, to, icon: Icon }, id) => (
              <LinkTo
                key={id}
                to={to}
                title={title}
                toggle={toggle}
                id={1}
                iconComponent={Icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
