const getTheTitles = function(books) {
    //loop over each array object and grab the title of the object
    let list = []
    list = books.map((book) => {
        return book.title
    })
    return list
};

// Do not edit below this line
module.exports = getTheTitles;
