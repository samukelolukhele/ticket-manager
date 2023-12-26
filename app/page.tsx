import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Home() {
  return (
    <main
      className="position-relative bg-image d-flex align-items-center justify-content-center  jumbotron jumbotron-fluid text-center vh-100"
      style={{ background: `url(/images/home-hero.jpg)` }}
    >
      <div className="overlay" />
      <div className="container z-3 text-light">
        <h1 className="display-3">More Efficient. More Productive.</h1>
        <p className="lead">
          Manage workflows & tasks with an intuitive interface that lets you
          track and monitor current outstanding.
        </p>
        <div className="d-flex justify-content-center align-items-center gap-4">
          <LoginLink className="btn btn-outline-light btn-lg">Login</LoginLink>
          <RegisterLink className="btn btn-primary btn-lg">
            Sign-Up
          </RegisterLink>
        </div>
      </div>
    </main>
  );
}
