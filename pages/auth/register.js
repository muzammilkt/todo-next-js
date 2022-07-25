import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Input, Button } from "../../components/UI";
import Link from "next/link";

function register() {
  const onRegister = async () => {
    console.log("register");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={onRegister}>
        <div className="grid place-items-center h-screen">
          <div className="bg-red-300 p-6 border-4 border-gray-600 rounded-lg w-5/12">
            <div className="grid place-items-center mb-2 text-fuchsia-800 subpixel-antialiased stacked-fractions italic">
              Register New User
            </div>
            <div>
              <Input
                type="text"
                varient="small"
                placeholder="email"
                // value={""}
                // onValueChange={""}
              ></Input>
            </div>
            <div className="mt-2">
              <Input
                type="password"
                varient="small"
                placeholder="password"
              ></Input>
            </div>
            <div className="mt-2">
              <Input
                type="password"
                varient="small"
                placeholder="confirm password"
              ></Input>
            </div>
            <div className="form-btn flex justify-center pb-12 mt-2">
              <Button variant="outline" type="submit">
                Register
              </Button>
            </div>
            <div className="grid place-items-center">
              <Link href={`/`}>Already have a account?Login</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default register;
