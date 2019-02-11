import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

/** Gobal state object */

const state = {};

const searchControll = async () => {
    // we get query from view 
    const query = searchView.getInput();
    if (query) {
        // new search object and add to state
        state.search = new Search(query);

        //  results to UI
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        //serach for results
        await state.search.getReceipe();

        //render to UI
        clearLoader();
        searchView.renderResults(state.search.result);
    }

}

elements.searchForm.addEventListener('submit', a => {
    a.preventDefault();
    searchControll();
})
