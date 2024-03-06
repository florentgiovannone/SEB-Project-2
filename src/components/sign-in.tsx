function SignIn() {
  return (
    <>
      <header className="">Navbar</header>
      <section className="section is-large">
        <div className="columns is-centered">
          <div className="column is-10-mobile is-8-tablet is-5-desktop is-4-widescreen is-3-fullhd">
            <form className="box ">
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="e.g. name@example.com"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="***********"
                  />
                </div>
              </div>

              <button className="button is-dark">Sign in</button>
            </form>
          </div>
        </div>
      </section>
      <footer>Footer</footer>
    </>
  );
}

export default SignIn;
