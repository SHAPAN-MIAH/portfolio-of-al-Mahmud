"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/sections/Navbar/Navbar";
import { useEffect } from "react";
import HomePage from "@/components/Home/HomePage";

export default function Home() {
  useEffect(()=> {
    require("bootstrap/dist/js/bootstrap.min.js")
  })
  return (
    <main className={styles.main}>
      <Navbar/>
      <HomePage />
    </main>
  );
}
