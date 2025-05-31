import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css";

export default function Product() {

return (
    <div className={styles.product}>
    <Link href="/chitietsanpham">
    <div className={styles.mainProduct}>

          <div className={styles.hinh}>
            <img src="/Nike.jpg" alt="Product 1" layout="responsive" width={180} height={220}/>
          </div>
          <div className={styles.ten}>
            <h5>Giày Nike </h5>
          </div>
          <div className={styles.gia}>
            <strong className={styles.price}>3.000.000đ

            </strong>
            <span className={styles.discount}>
              <label className={styles.oldPrice}>500.000đ</label>
              <small>-50%</small>
            </span>
          </div>
          <div className={styles.conlai}>
            <Image src="/flash-sale.png" alt="Product 1" width={25} height={25} />
            <span>còn 10/20 suất</span>
          </div>

      </div>
      </Link>
    <div className={styles.buyButton}>
      <Link href="/giohang">Mua Ngay</Link>
    </div>
  </div>
)


}