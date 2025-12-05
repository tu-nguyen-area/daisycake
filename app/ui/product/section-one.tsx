import SlideLine from '@/app/components/slide-line';
import styles from '@/app/modules/home.module.css';
import ProductList from '@/app/components/product-list';

export default function SectionOne() {
  return (
  <>

  <section>
    <div className={`${styles.slideSlip} pt-12 flex`}>
      <SlideLine />
    </div>

    <ProductList />
  </section>

  </>
  );
}
