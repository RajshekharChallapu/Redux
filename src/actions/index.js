export function selectBook(book){
    //selectBook is an actioncreator,it needs to return an action ,,,an object with a tyoe property..call by action creator
return {
    type: 'BOOK_SELECTED', 
    palyload: book
};
}
 
