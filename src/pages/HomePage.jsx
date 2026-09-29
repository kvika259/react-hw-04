import { useMemo } from "react";
import UserCard from "../entities/user/UserCard";
import Header from "../widgets/Header";

function HomePage() {
  const user = useMemo(() => {
    return {
      name: "Иван",
      city: "Минск",
      isActive: true,
    };
  }, []);

  return (
    <>
      <h1>HomePage</h1>
      <Header />
      <UserCard user={user} />
    </>
  );
}

export default HomePage;
