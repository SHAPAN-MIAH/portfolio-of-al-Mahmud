"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/sections/Navbar/Navbar";
import { useEffect } from "react";
import HomePage from "@/components/Home/HomePage";
import SocialLink from "@/components/Home/FixedComponents/SocialLink/SocialLink";
import Email from "@/components/Home/FixedComponents/Email/Email";

export default function Home() {
  useEffect(()=> {
    require("bootstrap/dist/js/bootstrap.min.js")
  })
  return (
    <main className={styles.main}>
      <Navbar/>
      <SocialLink/>
      <Email/>
      <HomePage />
    </main>
  );
}
