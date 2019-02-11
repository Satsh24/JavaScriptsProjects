import axios from 'axios';

export default class Search {

    constructor(query) {
        this.query = query;
    }
    async getReceipe() {

        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'fe8a5fdb1fcc137fba2b511b6547ac58';
        try {
            //const rec = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            // localStorage.setItem('resDate', JSON.stringify(rec.data.recipes));
            let newJSONObj = localStorage.getItem('resDate');
            this.result = JSON.parse(newJSONObj);
            //this.result = rec.data.recipes;
            console.log(this.result);

        } catch (error) {
            alert(error);

        }

    }


}


