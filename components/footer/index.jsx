import styles from './footer.module.scss'
import Link from 'next/link'

const Sections = () => (
  <div className={styles.list_container}>
    <div className={styles.container_sublist}>
      <div className={styles.list_item}>
        <div>
          <h3>Product</h3>
          <Link href="/features">Features</Link>
          <a href="https://github.com/ninadvyas">
            Roadmap
          </a>
          <a href="https://github.com/ninadvyas">
            Philosophy
          </a>
          <a>Journey</a>
          <a href="https://github.com/ninadvyas">
            Error Reporting
          </a>
        </div>
      </div>

      <div className={styles.list_item}>
        <div>
          <h3>About</h3>
          <a>Why Study Link?</a>
          <a>Blog</a>
          <Link href="/terms-and-conditions">Terms of use</Link>
          <Link href="/privacy">Privacy policy</Link>
        </div>
      </div>
    </div>

    <div className={styles.container_sublist}>
      <div className={styles.list_item}>
        <div>
          <h3>Company</h3>
          <a href="https://github.com/ninadvyas">About</a>
          <a href="https://github.com/ninadvyas">Updates</a>
          <a href="https://github.com/ninadvyas">Sponsors</a>
        </div>
      </div>

      <div className={styles.list_item}>
        <div>
          <h3>Support</h3>
          <a href="https://github.com/ninadvyas">Github</a>
          <a>FAQs</a>
          <a href="https://discord.gg/ZXEPNJrn">Community</a>
        </div>
      </div>
    </div>
  </div>
)

const Copyright = () => (
  <div className={styles.copyright}>
    <div>
      <a href="https://github.com/ninadvyas">
        <i className="ri-github-fill"></i>
      </a>
      <a href="https://www.instagram.com/ninadvsd/">
        <i className="ri-instagram-fill"></i>
      </a>
      <a href='https://twitter.com/ninadvsd'>
        <i className="ri-twitter-fill"></i>
      </a>
    </div>
    Copyright &copy; {new Date().getFullYear()} Study Link
  </div>
)

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Sections />
      <Copyright />
    </footer>
  )
}
