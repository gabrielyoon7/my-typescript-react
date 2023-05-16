import { Outlet, useNavigate } from "react-router-dom";
import { homeChildren } from "../router";

function HomeLayout() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Outlet />
      </div>
      <hr />
      <div>
        {homeChildren.map((child, i) => (
          <div key={`home-route-${i}`}>
            <div style={{ cursor: 'pointer', margin: '10px 0px' }} onClick={() => navigate(child.path)}>{child.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default HomeLayout;
