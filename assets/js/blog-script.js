let searchBlog = () => {
    const input = document.getElementById('search-blog');
    const filter = input.value.toUpperCase();

    const blogpost = document.getElementsByClassName("card");
    for (let i = 0; i < blogpost.length; i++) {
        let card = blogpost[i].getElementsByTagName('h5');
        if (card[0].innerHTML.toUpperCase().indexOf(filter) > -1) {
            blogpost[i].style.display = "";
        } else {
            blogpost[i].style.display = "none";
        }
    }
}

searchBlog();