document.write(`
	 <footer class="site-footer" id="footer">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4">
            <a class="footer-logo" href="#"
              ><i class="fa fa-cube"></i> SANTA<span class="brand-color"
                >FIED</span
              ></a
            >
            <p>
              Contact us for all of your Christmas questions:
            </p>
            <!--Remove tel spaces in the href-->
            <a class="footer-tel" href="tel:+1800123456">+ 1 800 123 456</a
            ><br /><span class="footer-email"
              >Email
              <a href="mailto:support@santafied.fi"
                >support@santafied.fi</a
              ></span
            >
          </div>
          <div class="col-12 col-md-4 footer-links">
            <h4>Links</h4>
            <ul class="list-unstyled">
              
              <li><a href="../pages/facts.html">Facts and Info</a></li>
              <li><a href="../pages/recipes.html">Recipes</a></li>
              <li><a href="../pages/gifts.html">Gifts Suggestions</a></li>
              <li><a href="../pages/songs.html">Seasonal Songs &amp; Lyrics</a></li>
              <li><a href="../pages/games.html">Seasonal Games</a></li>
              <li><a href="../pages/films.html">Seasonal Films</a></li>
              <li><a href="../pages/books.html">Seasonal Books</a></li>
              <li><a href="../pages/activities.html">Seasonal Activities</a></li>
              
            </ul>
          </div>
          <div class="col-12 col-md-4">
            <h4>Let's stay in touch</h4>
            <form class="form-inline">
              <div class="form-group">
                <label class="sr-only" for="footer-form-email">Email</label>
                <input
                  class="form-control form-inverted"
                  id="footer-form-email"
                  placeholder="Email"
                  type="email"
                />
                <button class="btn btn-primary" type="submit">Submit</button>
              </div>
            </form>

            <p>Get updates on sales and more</p>
            <ul class="list-inline footer-social">
              <li class="list-inline-item">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><i class="fab fa-youtube"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><i class="fab fa-twitter"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="footer-copyright">
            &copy; Santafied. A project under zero-to-mastery.
          </div>
        </div>
      </div>
    </footer>
  
`);