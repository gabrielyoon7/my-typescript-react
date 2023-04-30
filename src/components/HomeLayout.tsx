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
        {homeChildren.map((child) => (
          <div>
            <a href="" onClick={() => navigate(child.path)}>{child.title}</a>
          </div>
        ))}
      </div>
    </div>
  )
}
export default HomeLayout;
