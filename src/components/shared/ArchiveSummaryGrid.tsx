/**
 * 색인 페이지에서 반복되는 요약 수치 카드를 렌더링합니다.
 */

type ArchiveSummaryGridItem = {
  label: string;
  value: string;
};

type ArchiveSummaryGridStyles = {
  summaryCard: string;
  summaryGrid: string;
  summaryLabel: string;
  summaryLeadCard: string;
  summaryValue: string;
};

type ArchiveSummaryGridProps = {
  items: readonly ArchiveSummaryGridItem[];
  styles: ArchiveSummaryGridStyles;
};

const ArchiveSummaryGrid = ({ items, styles }: ArchiveSummaryGridProps) => (
  <section className={styles.summaryGrid}>
    {items.map((item, index) => {
      const isLeadSummary = index === 0;

      return (
        <article
          className={isLeadSummary ? styles.summaryLeadCard : styles.summaryCard}
          key={item.label}
        >
          <p className={styles.summaryLabel}>{item.label}</p>
          <p className={styles.summaryValue}>{item.value}</p>
        </article>
      );
    })}
  </section>
);

export default ArchiveSummaryGrid;
