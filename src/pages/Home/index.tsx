import LayoutWrapper from "../../components/LayoutWrapper";
import "./index.css";

function index() {
  return (
    <div className="page">
      <LayoutWrapper>
        <div className="home_layout">
          <div>side</div>
          <div>main</div>
          <div>rs</div>
        </div>
      </LayoutWrapper>
    </div>
  );
}

export default index;
