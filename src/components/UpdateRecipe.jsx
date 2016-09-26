import React, { Component } from 'react';

const propTypes = {
  params: React.PropTypes.object,
};

class UpdateRecipe extends Component {
  render() {
    return (
      <section className="new-recipe">
        <form className="new-recipe-form" onSubmit={this.handleSubmit}>
          <label htmlFor="recipe-name">
            <h3>Recipe name</h3>
            <input
              className="new-recipe-form__input"
              type="text"
              name="name"
              placeholder="My delicious salad"
              onChange={this.handleChange}
            />
          </label>
          <h3>Ingredients</h3>
          <label htmlFor="greens">
            <h4>Greens</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="greens"
              placeholder="Kale, romaine lettuce, spinach..."
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="beans">
            <h4>Beans</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="beans"
              placeholder="Chick peas, white beans, lentils..."
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="grains">
            <h4>Grains</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="grains"
              placeholder="Quinoa, bulgar wheat, pasta..."
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="veggies">
            <h4>Veggies</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="veggies"
              placeholder="Carrots, peppers, roasted squash..."
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="sweet">
            <h4>Sweet</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="sweet"
              placeholder="Raisins, diced apple, mango, ..."
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="crunchy">
            <h4>Crunchy</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="crunchy"
              placeholder="Almonds, walnuts, croutons..."
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="dressing">
            <h4>Dressing</h4>
            <input
              className="new-recipe-form__input"
              type="text"
              name="dressing"
              placeholder="Balsamic vinaigrette, blue cheese..."
              onChange={this.handleChange}
            />
          </label>
          <input
            className="new-recipe-form__submit"
            type="submit"
            value="Create recipe"
          />
        </form>
      </section>
    );
  }
}

UpdateRecipe.propTypes = propTypes;

export default UpdateRecipe;