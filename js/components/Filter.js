import Component from './Component.js';

class Filter extends Component {
    render() {
        const dom = this.renderDOM();
        const form = dom.querySelector('form');
        // const inputs = dom.querySelectorAll('input');

        const filter = {
            checks: '',
            search: ''
        };

        form.addEventListener('input', () => {
            const formData = new FormData(form);

            filter.checks = formData.get('checks');
            filter.search = formData.get('search');
            
            this.props.onFilter(filter); 

        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <section>
                <form class="filter-section">
                    <input class="filter" name="search">
                    <label>
                        <input type="radio" name="checks" value="all">
                        All
                    </label>
                    <label>
                        <input type="radio" name="checks" value="true">
                        Completed
                    </label>
                    <label>
                        <input type="radio" name="checks" value="false">
                        Not Done
                    </label>
                </form>
            </section>
        `;
    }
}

export default Filter;