import about from "../../styles/about-us.module.css";

export const metadata = {
  title: "About us",
};

export default function AboutUs() {
  return (
    <div className={about.container}>
      <h1 className={about.title}>
        Welcome to the official explorer for The New York Times Best Seller list
        explorer. We hope you enjoy your stay!
      </h1>
    </div>
  );
}

export const runtime = "edge";
