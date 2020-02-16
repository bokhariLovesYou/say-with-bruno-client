import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CardContents from "./CardContents";
import CardSkeleton from "./CardSkeleton";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

export class PostsWrapper extends Component {
  state = {
    completeData: null,
    dataSet: [],
    count: 5,
    start: 0,
    iterationReveal: 5,
    hasMore: true
  };

  componentDidMount() {
    fetch("https://europe-west1-socialape-d081e.cloudfunctions.net/api/screams")
      .then(r => r.json())
      .then(data => {
        this.setState({
          completeData: data
        });
      })
      .then(data => {
        this.setState({
          dataSet: this.state.completeData.slice(0, this.state.count),
          dataLoaded: true
        });
      });
  }

  fetchMoreData = () => {
    setTimeout(() => {
      this.setState({
        start: 1 + this.state.count,
        count: 1 + this.state.count + this.state.iterationReveal
      });
      if (
        this.state.count > this.state.completeData.length ||
        this.state.count === this.state.completeData.length
      ) {
        this.setState({
          dataSet: this.state.completeData,
          hasMore: false
        });
      } else {
        this.setState({
          dataSet: this.state.dataSet.concat(
            this.state.completeData.slice(this.state.start, this.state.count)
          )
        });
      }
    }, 1000);
  };

  renderSkeleton = () => {
    return [...Array(3)].map((elem, index) => <CardSkeleton key={index} />);
  };

  render() {
    const renderPosts = () => {
      if (this.state.dataSet !== null) {
        return this.state.dataSet.map((elem, index) => (
          <CardContents
            title={elem.body}
            description={
              elem.body.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 200) + "..."
            }
            userImage={elem.userImage}
            coverImage={elem.userImage}
            author={elem.userHandle}
            commentCount={elem.commentCount}
            likeCount={elem.likeCount}
            key={index}
          />
        ));
      }
    };

    return (
      <InfiniteScroll
        dataLength={this.state.dataSet.length}
        next={this.fetchMoreData}
        hasMore={this.state.hasMore}
        loader={this.renderSkeleton()}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {renderPosts()}
      </InfiniteScroll>
    );
  }
}

export default PostsWrapper;
