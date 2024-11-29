class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
   
    search() {
        let keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: 'i' // case insensitive
            }
        } : {}; // this curly braces refers to an empty object
        
        this.query.find({ ...keyword });
        return this;
    }
}

export default APIFeatures;
