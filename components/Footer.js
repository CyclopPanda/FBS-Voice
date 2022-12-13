import styles from "./styles/Footer.module.css";
function footerData() {
  return (
<footer itemscope itemtype="http://schema.org/WPFooter" className={styles.footer}>
    <div className={styles.content}>
      <div className={styles.innercontainer}>
        <ul className={styles.footerlinks}>
          <li>
            <a href="https://fulhamboysschool.org/" target="_blank" rel="noopener"> <i class="fab fa-twitter"></i>
              School Website</a>
          </li>
          <li>
            <a href="https://github.com/CyclopPanda/FBS-Voice" target="_blank" rel="noopener"> <i class="fab fa-github"></i>
              Github: Source Code</a>
          </li>
        </ul>
      </div>
      <div className={styles.footercopy}>
        &copy;
        <script>
          document.write(new Date().getFullYear() + " ");
        </script>
        FBS Voice -
        <a href="mailto:mailto:20tjohnton@fulhamboysschool.org.uk" class="no-smoothState">Contact</a>
      </div>
    </div>
  </footer>

);
}

export default footerData;