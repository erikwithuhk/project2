import React, { Component } from 'react';
import { Link } from 'react-router';
import request from 'superagent';
import * as firebase from 'firebase';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLoggedIn: false,
      userID: null,
      username: null,
      recipes: [],
    };
    this.signOut = this.signOut.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      firebase.auth()
              .onAuthStateChanged((user) => {
                if (user !== null) {
                  this.setState({
                    userLoggedIn: true,
                    userID: user.uid,
                  });
                  this.getUsernameByID(this.state.userID);
                  this.getRecipes();
                }
              });
    }, 200);
  }
  getUsernameByID(userID) {
    const userRef = firebase.database().ref(`users/${userID}`);
    userRef.on('value', (snapshot) => {
      const userData = snapshot.val();
      const username = userData.username;
      this.setState({ username });
    });
  }
  getRecipes() {
    const recipeListRef = firebase.database().ref('recipes');
    recipeListRef.on('value', (snapshot) => {
      const recipesData = snapshot.val();
      let recipes = [];
      recipes = Object.keys(recipesData).map((id) => {
        const recipeData = recipesData[id];
        return {
          id,
          name: recipeData.name,
          userID: recipeData.userID,
          username: recipeData.username,
          ingredients: recipeData.ingredients,
        };
      });
      this.setState({ recipes });
    });
  }
  showHeaderOnLogin() {
    if (this.state.userLoggedIn) {
      return (
        <header>
          <nav className="top-nav">
            <h1 className="top-nav__brand">Mason Jar Salads</h1>
            <nav className="top-nav__sub-nav">
              <Link to="/" >My recipes</Link>
              <Link to="/welcome" onClick={this.signOut}>Sign out</Link>
            </nav>
          </nav>
        </header>
      );
    }
    return false;
  }
  signOut() {
    firebase.auth()
            .signOut()
            .then(() => {
              this.setState({
                userLoggedIn: false,
                userID: null,
              });
            });
  }
  createRecipe(name, ing1, ing2) {
    const data = {
      name,
      userID: this.state.userID,
      username: this.state.username,
      ingredients: [`1 cup ${ing1}`, `2 tbsp ${ing2}`],
    };
    this.pushRecipeToRecipes(data);
  }
  pushRecipeToRecipes(data) {
    const recipeListRef = firebase.database().ref('recipes');
    const newRecipeRef = recipeListRef.push();
    newRecipeRef.set(data);
  }
  pushRecipeToUser() {

  }
  render() {
    const childrenWithProps = React.cloneElement(this.props.children, {
      recipes: this.state.recipes,
      getRecipe: this.getRecipe,
    });
    return (
      <div className="container">
        {this.showHeaderOnLogin()}
        <main>
          {childrenWithProps}
        </main>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
