import styles from "./container.module.scss";
import Head from "next/head";

export const Container = ({ children, title }) => {
  const t = ` Study Link`
  return (
    <>
      {title && (
        <Head>
          <title>{t}</title>
          <meta name="twitter:title" content={t} />
          <meta property="og:title" content={t} />
        </Head>
      )}
      <div className={styles.container}>
        {children}
      </div>
    </>
  )
}
