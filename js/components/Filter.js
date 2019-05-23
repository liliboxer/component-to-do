import Component from './Component.js';

class Filter extends Component {

    renderTemplate() {
        return /*html*/ `
            <section class="filter-section">
                <input class="filter" name="filter">
               

                <label>
                    <input type="radio" name="list" value="all">
                    All
                </label>

                <label>
                    <input type="radio" name="list" value="completed">
                    Completed
                </label>

                <label>
                    <input type="radio" name="list" value="not-done">
                    Not Done
                </label>

            </section>
        `;
    }
}

export default Filter;