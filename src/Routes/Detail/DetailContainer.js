import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const { location: { pathname } } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
      videos: false,
      production_companies: false,
      production_countries: false,
      spoken_languages: false,
      seasons: false,
      created_by: false
    };
  }

  toggleVideos = () => {
    this.setState({
      videos: true,
      production_companies: false,
      production_countries: false,
      spoken_languages: false,
      seasons: false,
      created_by: false
    });
  }

  toggleCompanies = () => {
    this.setState({
      videos: false,
      production_companies: true,
      production_countries: false,
      spoken_languages: false,
      seasons: false,
      created_by: false
    });
  }

  toggleCountries = () => {
    this.setState({
      videos: false,
      production_companies: false,
      production_countries: true,
      spoken_languages: false,
      seasons: false,
      created_by: false
    });
  }

  toggleLanguages = () => {
    this.setState({
      videos: false,
      production_companies: false,
      production_countries: false,
      spoken_languages: true,
      seasons: false,
      created_by: false
    });
  }

  toggleSeasons = () => {
    this.setState({
      videos: false,
      production_companies: false,
      production_countries: false,
      spoken_languages: false,
      seasons: true,
      created_by: false
    });
  }

  toggleCreator = () => {
    this.setState({
      videos: false,
      production_companies: false,
      production_countries: false,
      spoken_languages: false,
      seasons: false,
      created_by: true
    });
  }

  async componentDidMount() {
    const { match: { params: { id }}, history: { push } } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        ({data: result} = await moviesApi.movieDetail(parsedId));
      } else {
        ({data: result} = await tvApi.showDetail(parsedId));
        console.log(result)
      }
    } catch {
      this.setState({ error: "Cannot find the item."})
    } finally {
      this.setState({ loading: false, result })
    }
  }

  render() {
    const {
      result,
      isMovie,
      error,
      loading,
      videos,
      production_companies,
      production_countries,
      spoken_languages,
      seasons,
      created_by
    } = this.state;
    return (
      <DetailPresenter
        result={result}
        isMovie={isMovie}
        error={error}
        loading={loading}
        videos={videos}
        production_companies={production_companies}
        production_countries={production_countries}
        spoken_languages={spoken_languages}
        seasons={seasons}
        created_by={created_by}
        toggleCountries={this.toggleCountries}
        toggleCompanies={this.toggleCompanies}
        toggleVideos={this.toggleVideos}
        toggleLanguages={this.toggleLanguages}
        toggleSeasons={this.toggleSeasons}
        toggleCreator={this.toggleCreator}
      />
    );
  }
}
