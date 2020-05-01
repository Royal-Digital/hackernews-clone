import { connect } from "react-redux";
import { SearchComponent } from "./SearchComponent";
import { searchNews } from "./duck/actions";
import { getNewsListSelector } from "./duck/selectors";

const mapStateToProps = ({ news }, props) => {
  const searchResults = getNewsListSelector({ news }, props);

  return { searchingNews: news.searching, searchResults };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchNews: (page, query) => dispatch(searchNews(page, query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
