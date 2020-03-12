import React from "react";
import CollectionPresenter from "./CollectionPresenter";
import { collectionApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      error: null,
      loading: true,
    };
  }

  async componentDidMount() {
    const { match: { params: { id }}, history: { push } } = this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      ({data: result} = await collectionApi.collectionDetail(parsedId));
      console.log(result)
    } catch {
      this.setState({ error: "Cannot find the collection."})
    } finally {
      this.setState({ loading: false, result })
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return (
      <CollectionPresenter result={result} error={error} loading={loading} />
    );
  }
}
