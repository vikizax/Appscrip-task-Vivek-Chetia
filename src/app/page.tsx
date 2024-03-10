import styles from "./page.module.css";
import Navbar from "@/components/Navigation/navbar";
import Hero from "@/components/Hero";
import SidebarContainer from "./containers/SidebarContainer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Hero />

        <SidebarContainer>
          <>WAAH</>
        </SidebarContainer>

      </main>
    </>
  );
}
