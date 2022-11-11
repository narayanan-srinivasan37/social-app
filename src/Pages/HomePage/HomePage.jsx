import "./HomePage.scss";
import Stories from "../../components/Stories/Stories";
import Posts from "../../components/Posts/Posts";
function HomePage() {
  return (
    <div className="home">
      <div className="storiesView">
        <Stories />
      </div>
      <div>
        <Posts />
      </div>
    </div>
  );
}

export default HomePage;
