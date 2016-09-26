import React, { Component } from 'react';
import { Link } from 'react-router';
import RecipeCard from './RecipeCard.jsx';

const propTypes = {
  params: React.PropTypes.object,
  currentUserID: React.PropTypes.string,
  recipes: React.PropTypes.array,
};

class RecipeList extends Component {
  renderRecipeCards() {
    const recipes = this.props.recipes;
    const recipeCards = recipes.map((recipe) => {
      if (this.props.params.username) {
        if (recipe.userID === this.props.currentUserID) {
          return (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              recipeName={recipe.name}
              authorName={recipe.username}
            />
          );
        }
      } else {
        return (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            recipeName={recipe.name}
            authorName={recipe.username}
          />
        );
      }
    });
    return recipeCards;
  }
  render() {
    return (
      <section className="recipes">
        {this.renderRecipeCards()}
        <Link to="/recipes/new"><button className="new-recipe-button">+</button></Link>
      </section>
    );
  }
}

RecipeList.propTypes = propTypes;

export default RecipeList;
